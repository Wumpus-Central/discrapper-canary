let r;
n.d(t, { Z: () => U });
var i,
    a = n(954955),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    c = n(287734),
    u = n(579806),
    d = n(491966),
    f = n(695346),
    p = n(70956),
    _ = n(358085),
    m = n(314897),
    h = n(981631),
    g = n(65154);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let b = Date.now(),
    y = !1,
    O = !1,
    v = !1,
    S = !1,
    I = !1;
function T() {
    return v || S || ((0, _.isAndroid)() && I);
}
function C() {
    let e = f.CM.getSetting();
    0 === e || null != r || Date.now() - b > Math.min(e * p.Z.Millis.SECOND, h.OSm) || T()
        ? O ||
          l.Z.dispatch({
              type: "AFK",
              afk: !0,
          })
        : O &&
          l.Z.dispatch({
              type: "AFK",
              afk: !1,
          });
}
function A() {
    Date.now() - b > h.OSm || T()
        ? y ||
          l.Z.dispatch({
              type: "IDLE",
              idle: !0,
              idleSince: b,
          })
        : y &&
          l.Z.dispatch({
              type: "IDLE",
              idle: !1,
          });
}
function N() {
    A(), C();
}
function P() {
    var e;
    let t = (e) => {
        if (d.Z.getConfig({ location: "checkNativeIdle" }).system_wide_input) {
            let t = Date.now() - e;
            (null == r || t > r) && ((b = Math.max(t, b)), (r = null));
        }
        N(), setTimeout(P, 10 * p.Z.Millis.SECOND);
    };
    if (
        (null === u.Z || void 0 === u.Z || null == (e = u.Z.remotePowerMonitor) ? void 0 : e.getSystemIdleTimeMs) !=
        null
    ) {
        let e = u.Z.remotePowerMonitor.getSystemIdleTimeMs();
        e instanceof Promise ? e.then(t) : t(e);
    }
}
function R(e) {
    d.Z.getConfig({ location: "handlePowerEvent" }).power_events ? j({}) : (e && (r = Date.now()), N());
}
if (!__OVERLAY__) {
    _.isPlatformEmbedded && (null === u.Z || void 0 === u.Z ? void 0 : u.Z.remotePowerMonitor) != null
        ? (P(),
          u.Z.remotePowerMonitor.on("resume", () => {
              (v = !1), R(!1);
          }),
          u.Z.remotePowerMonitor.on("suspend", () => {
              (v = !0), R(!0), c.default.disconnect();
          }),
          u.Z.remotePowerMonitor.on("lock-screen", () => {
              (S = !0), R(!0);
          }),
          u.Z.remotePowerMonitor.on("unlock-screen", () => {
              (S = !1), R(!1);
          }))
        : setInterval(N, 30 * p.Z.Millis.SECOND);
    let e = o()(() => {
        d.Z.getConfig({ location: "handleGenericInput" }).generic_inputs && j({});
    }, 500);
    window.addEventListener("mouseup", e), window.addEventListener("wheel", e), window.addEventListener("keypress", e);
}
function D(e) {
    y = e.idle;
}
function w(e) {
    O = e.afk;
}
function x(e) {
    let { userId: t, speakingFlags: n } = e;
    return n !== g.Dg.NONE && t === m.default.getId() && j({}), !1;
}
function L(e) {
    let { state: t } = e;
    return (I = t === h.$7l.BACKGROUND), (r = null), (b = Date.now()), N(), !1;
}
function j(e) {
    let { timestamp: t, type: n } = e,
        i = "OVERLAY_SET_NOT_IDLE" === n && null != t;
    return (
        (!i || !(t <= b)) &&
        ((r = null),
        (b = i ? t : Date.now()),
        __OVERLAY__
            ? l.Z.dispatch({
                  type: "OVERLAY_SET_NOT_IDLE",
                  timestamp: b,
              })
            : N(),
        !1)
    );
}
function M() {
    if (!d.Z.getConfig({ location: "handleSettingsProtoUpdate" }).settings_updates) return !1;
    j({});
}
class k extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(m.default);
    }
    isIdle() {
        return y;
    }
    isAFK() {
        return O;
    }
    getIdleSince() {
        return y ? b : null;
    }
    getSystemSuspended() {
        return v;
    }
    getSystemLocked() {
        return S;
    }
}
E(k, "displayName", "IdleStore");
let U = new k(l.Z, {
    IDLE: D,
    AFK: w,
    SPEAKING: x,
    APP_STATE_UPDATE: L,
    OVERLAY_SET_NOT_IDLE: j,
    CHANNEL_SELECT: j,
    VOICE_CHANNEL_SELECT: j,
    WINDOW_FOCUS: j,
    OVERLAY_INITIALIZE: j,
    OVERLAY_SET_INPUT_LOCKED: j,
    USER_SETTINGS_PROTO_UPDATE: M,
});
