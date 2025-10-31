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
    _ = n(70956),
    p = n(358085),
    h = n(314897),
    m = n(981631),
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
    I = !1,
    T = !1;
function S() {
    return v || I || ((0, p.isAndroid)() && T);
}
function A() {
    let e = f.CM.getSetting();
    0 === e || null != r || Date.now() - b > Math.min(e * _.Z.Millis.SECOND, m.OSm) || S()
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
function C() {
    Date.now() - b > m.OSm || S()
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
    C(), A();
}
function R() {
    var e;
    let t = (e) => {
        if (d.Z.getConfig({ location: "checkNativeIdle" }).system_wide_input) {
            let t = Date.now() - e;
            (null == r || t > r) && ((b = Math.max(t, b)), (r = null));
        }
        N(), setTimeout(R, 10 * _.Z.Millis.SECOND);
    };
    if (
        (null === u.Z || void 0 === u.Z || null == (e = u.Z.remotePowerMonitor) ? void 0 : e.getSystemIdleTimeMs) !=
        null
    ) {
        let e = u.Z.remotePowerMonitor.getSystemIdleTimeMs();
        e instanceof Promise ? e.then(t) : t(e);
    }
}
function P(e) {
    d.Z.getConfig({ location: "handlePowerEvent" }).power_events ? M({}) : (e && (r = Date.now()), N());
}
if (!__OVERLAY__) {
    p.isPlatformEmbedded && (null === u.Z || void 0 === u.Z ? void 0 : u.Z.remotePowerMonitor) != null
        ? (R(),
          u.Z.remotePowerMonitor.on("resume", () => {
              (v = !1), P(!1);
          }),
          u.Z.remotePowerMonitor.on("suspend", () => {
              (v = !0), P(!0), c.default.disconnect();
          }),
          u.Z.remotePowerMonitor.on("lock-screen", () => {
              (I = !0), P(!0);
          }),
          u.Z.remotePowerMonitor.on("unlock-screen", () => {
              (I = !1), P(!1);
          }))
        : setInterval(N, 30 * _.Z.Millis.SECOND);
    let e = o()(() => {
        d.Z.getConfig({ location: "handleGenericInput" }).generic_inputs && M({});
    }, 500);
    window.addEventListener("mouseup", e), window.addEventListener("wheel", e), window.addEventListener("keypress", e);
}
function w(e) {
    y = e.idle;
}
function D(e) {
    O = e.afk;
}
function x(e) {
    let { userId: t, speakingFlags: n } = e;
    return n !== g.Dg.NONE && t === h.default.getId() && M({}), !1;
}
function L(e) {
    let { state: t } = e;
    return (T = t === m.$7l.BACKGROUND), (r = null), (b = Date.now()), N(), !1;
}
function M(e) {
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
function j() {
    if (!d.Z.getConfig({ location: "handleSettingsProtoUpdate" }).settings_updates) return !1;
    M({});
}
class k extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(h.default);
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
        return I;
    }
}
E(k, "displayName", "IdleStore");
let U = new k(l.Z, {
    IDLE: w,
    AFK: D,
    SPEAKING: x,
    APP_STATE_UPDATE: L,
    OVERLAY_SET_NOT_IDLE: M,
    CHANNEL_SELECT: M,
    VOICE_CHANNEL_SELECT: M,
    WINDOW_FOCUS: M,
    OVERLAY_INITIALIZE: M,
    OVERLAY_SET_INPUT_LOCKED: M,
    USER_SETTINGS_PROTO_UPDATE: j,
});
