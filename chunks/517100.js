n.d(t, { Z: () => x });
var i,
    r = n(442837),
    a = n(570140),
    s = n(287734),
    o = n(579806),
    l = n(695346),
    u = n(70956),
    c = n(358085),
    d = n(314897),
    f = n(981631),
    _ = n(65154);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let h = Date.now(),
    m = !1,
    g = !1,
    E = !1,
    v = !1,
    y = !1;
function I() {
    return E || v || ((0, c.isAndroid)() && y);
}
function T() {
    Date.now() - h > Math.min(l.CM.getSetting() * u.Z.Millis.SECOND, f.OSm) || I()
        ? g ||
          a.Z.dispatch({
              type: 'AFK',
              afk: !0
          })
        : g &&
          a.Z.dispatch({
              type: 'AFK',
              afk: !1
          });
}
function b() {
    Date.now() - h > f.OSm || I()
        ? m ||
          a.Z.dispatch({
              type: 'IDLE',
              idle: !0,
              idleSince: h
          })
        : m &&
          a.Z.dispatch({
              type: 'IDLE',
              idle: !1
          });
}
function S() {
    b(), T();
}
function A() {
    var e;
    let t = (e) => {
        (h = Math.max(Date.now() - e, h)), S(), setTimeout(A, 10 * u.Z.Millis.SECOND);
    };
    if ((null === o.Z || void 0 === o.Z ? void 0 : null === (e = o.Z.remotePowerMonitor) || void 0 === e ? void 0 : e.getSystemIdleTimeMs) != null) {
        let e = o.Z.remotePowerMonitor.getSystemIdleTimeMs();
        e instanceof Promise ? e.then(t) : t(e);
    }
}
function N(e) {
    m = e.idle;
}
function C(e) {
    g = e.afk;
}
function R(e) {
    let { userId: t, speakingFlags: n } = e;
    return n !== _.Dg.NONE && t === d.default.getId() && D({}), !1;
}
function O(e) {
    let { state: t } = e;
    return (y = t === f.$7l.BACKGROUND), (h = Date.now()), S(), !1;
}
function D(e) {
    let { timestamp: t, type: n } = e,
        i = 'OVERLAY_SET_NOT_IDLE' === n && null != t;
    return (
        (!i || !(t <= h)) &&
        ((h = i ? t : Date.now()),
        __OVERLAY__
            ? a.Z.dispatch({
                  type: 'OVERLAY_SET_NOT_IDLE',
                  timestamp: h
              })
            : S(),
        !1)
    );
}
__OVERLAY__ ||
    (c.isPlatformEmbedded && (null === o.Z || void 0 === o.Z ? void 0 : o.Z.remotePowerMonitor) != null
        ? (A(),
          o.Z.remotePowerMonitor.on('resume', () => {
              (E = !1), D({});
          }),
          o.Z.remotePowerMonitor.on('suspend', () => {
              (E = !0), D({}), s.default.disconnect();
          }),
          o.Z.remotePowerMonitor.on('lock-screen', () => {
              (v = !0), D({});
          }),
          o.Z.remotePowerMonitor.on('unlock-screen', () => {
              (v = !1), D({});
          }))
        : setInterval(S, 0.25 * f.OSm));
class L extends (i = r.ZP.Store) {
    isIdle() {
        return m;
    }
    isAFK() {
        return g;
    }
    getIdleSince() {
        return m ? h : null;
    }
}
p(L, 'displayName', 'IdleStore');
let x = new L(a.Z, {
    IDLE: N,
    AFK: C,
    SPEAKING: R,
    APP_STATE_UPDATE: O,
    OVERLAY_SET_NOT_IDLE: D,
    CHANNEL_SELECT: D,
    VOICE_CHANNEL_SELECT: D,
    WINDOW_FOCUS: D,
    OVERLAY_INITIALIZE: D,
    OVERLAY_SET_INPUT_LOCKED: D,
    USER_SETTINGS_PROTO_UPDATE: D
});
