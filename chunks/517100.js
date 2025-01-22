var i,
    a = r(442837),
    o = r(570140),
    s = r(287734),
    l = r(579806),
    u = r(695346),
    c = r(70956),
    d = r(358085),
    f = r(314897),
    p = r(981631),
    h = r(65154);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = Date.now(),
    g = !1,
    E = !1,
    v = !1,
    y = !1,
    b = !1;
function I() {
    return v || y || ((0, d.isAndroid)() && b);
}
function T() {
    Date.now() - m > Math.min(u.CM.getSetting() * c.Z.Millis.SECOND, p.OSm) || I()
        ? !E &&
          o.Z.dispatch({
              type: 'AFK',
              afk: !0
          })
        : E &&
          o.Z.dispatch({
              type: 'AFK',
              afk: !1
          });
}
function S() {
    Date.now() - m > p.OSm || I()
        ? !g &&
          o.Z.dispatch({
              type: 'IDLE',
              idle: !0,
              idleSince: m
          })
        : g &&
          o.Z.dispatch({
              type: 'IDLE',
              idle: !1
          });
}
function A() {
    S(), T();
}
function C() {
    var e;
    let n = (e) => {
        (m = Math.max(Date.now() - e, m)), A(), setTimeout(C, 10 * c.Z.Millis.SECOND);
    };
    if ((null === l.Z || void 0 === l.Z ? void 0 : null === (e = l.Z.remotePowerMonitor) || void 0 === e ? void 0 : e.getSystemIdleTimeMs) != null) {
        let e = l.Z.remotePowerMonitor.getSystemIdleTimeMs();
        e instanceof Promise ? e.then(n) : n(e);
    }
}
function N(e) {
    g = e.idle;
}
function R(e) {
    E = e.afk;
}
function O(e) {
    let { userId: n, speakingFlags: r } = e;
    return r !== h.Dg.NONE && n === f.default.getId() && L({}), !1;
}
function D(e) {
    let { state: n } = e;
    return (b = n === p.$7l.BACKGROUND), (m = Date.now()), A(), !1;
}
function L(e) {
    let { timestamp: n, type: r } = e,
        i = 'OVERLAY_SET_NOT_IDLE' === r && null != n;
    return (
        (!i || !(n <= m)) &&
        ((m = i ? n : Date.now()),
        __OVERLAY__
            ? o.Z.dispatch({
                  type: 'OVERLAY_SET_NOT_IDLE',
                  timestamp: m
              })
            : A(),
        !1)
    );
}
!__OVERLAY__ &&
    (d.isPlatformEmbedded && (null === l.Z || void 0 === l.Z ? void 0 : l.Z.remotePowerMonitor) != null
        ? (C(),
          l.Z.remotePowerMonitor.on('resume', () => {
              (v = !1), L({});
          }),
          l.Z.remotePowerMonitor.on('suspend', () => {
              (v = !0), L({}), s.default.disconnect();
          }),
          l.Z.remotePowerMonitor.on('lock-screen', () => {
              (y = !0), L({});
          }),
          l.Z.remotePowerMonitor.on('unlock-screen', () => {
              (y = !1), L({});
          }))
        : setInterval(A, 0.25 * p.OSm));
class x extends (i = a.ZP.Store) {
    isIdle() {
        return g;
    }
    isAFK() {
        return E;
    }
    getIdleSince() {
        return g ? m : null;
    }
}
_(x, 'displayName', 'IdleStore'),
    (n.Z = new x(o.Z, {
        IDLE: N,
        AFK: R,
        SPEAKING: O,
        APP_STATE_UPDATE: D,
        OVERLAY_SET_NOT_IDLE: L,
        CHANNEL_SELECT: L,
        VOICE_CHANNEL_SELECT: L,
        WINDOW_FOCUS: L,
        OVERLAY_INITIALIZE: L,
        OVERLAY_SET_INPUT_LOCKED: L,
        USER_SETTINGS_PROTO_UPDATE: L
    }));
