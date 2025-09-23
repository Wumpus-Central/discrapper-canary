n.d(t, { Z: () => k });
var r,
    i = n(954955),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(287734),
    c = n(579806),
    u = n(491966),
    d = n(695346),
    f = n(70956),
    _ = n(358085),
    p = n(314897),
    h = n(981631),
    m = n(65154);
function g(e, t, n) {
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
let E = Date.now(),
    b = !1,
    y = !1,
    O = !1,
    v = !1,
    I = !1;
function T() {
    return O || v || ((0, _.isAndroid)() && I);
}
function S() {
    let e = d.CM.getSetting();
    0 === e || Date.now() - E > Math.min(e * f.Z.Millis.SECOND, h.OSm) || T()
        ? y ||
          s.Z.dispatch({
              type: "AFK",
              afk: !0,
          })
        : y &&
          s.Z.dispatch({
              type: "AFK",
              afk: !1,
          });
}
function A() {
    Date.now() - E > h.OSm || T()
        ? b ||
          s.Z.dispatch({
              type: "IDLE",
              idle: !0,
              idleSince: E,
          })
        : b &&
          s.Z.dispatch({
              type: "IDLE",
              idle: !1,
          });
}
function C() {
    A(), S();
}
function N() {
    var e;
    let t = (e) => {
        (E = Math.max(Date.now() - e, E)), C(), setTimeout(N, 10 * f.Z.Millis.SECOND);
    };
    if (
        (null === c.Z || void 0 === c.Z || null == (e = c.Z.remotePowerMonitor) ? void 0 : e.getSystemIdleTimeMs) !=
        null
    ) {
        let e = c.Z.remotePowerMonitor.getSystemIdleTimeMs();
        e instanceof Promise ? e.then(t) : t(e);
    }
}
function R(e) {
    u.Z.getConfig({ location: "handlePowerEvent" }).power_events ? L({}) : (e && (E = -1 / 0), C());
}
if (!__OVERLAY__) {
    _.isPlatformEmbedded && (null === c.Z || void 0 === c.Z ? void 0 : c.Z.remotePowerMonitor) != null
        ? (N(),
          c.Z.remotePowerMonitor.on("resume", () => {
              (O = !1), R(!1);
          }),
          c.Z.remotePowerMonitor.on("suspend", () => {
              (O = !0), R(!0), l.default.disconnect();
          }),
          c.Z.remotePowerMonitor.on("lock-screen", () => {
              (v = !0), R(!0);
          }),
          c.Z.remotePowerMonitor.on("unlock-screen", () => {
              (v = !1), R(!1);
          }))
        : setInterval(C, 30 * f.Z.Millis.SECOND);
    let e = a()(() => {
        u.Z.getConfig({ location: "handleGenericInput" }).generic_inputs && L({});
    }, 500);
    window.addEventListener("mouseup", e), window.addEventListener("wheel", e), window.addEventListener("keypress", e);
}
function P(e) {
    b = e.idle;
}
function w(e) {
    y = e.afk;
}
function D(e) {
    let { userId: t, speakingFlags: n } = e;
    return n !== m.Dg.NONE && t === p.default.getId() && L({}), !1;
}
function x(e) {
    let { state: t } = e;
    return (I = t === h.$7l.BACKGROUND), (E = Date.now()), C(), !1;
}
function L(e) {
    let { timestamp: t, type: n } = e,
        r = "OVERLAY_SET_NOT_IDLE" === n && null != t;
    return (
        (!r || !(t <= E)) &&
        ((E = r ? t : Date.now()),
        __OVERLAY__
            ? s.Z.dispatch({
                  type: "OVERLAY_SET_NOT_IDLE",
                  timestamp: E,
              })
            : C(),
        !1)
    );
}
function j() {
    if (!u.Z.getConfig({ location: "handleSettingsProtoUpdate" }).settings_updates) return !1;
    L({});
}
class M extends (r = o.ZP.Store) {
    isIdle() {
        return b;
    }
    isAFK() {
        return y;
    }
    getIdleSince() {
        return b ? E : null;
    }
    getSystemSuspended() {
        return O;
    }
    getSystemLocked() {
        return v;
    }
}
g(M, "displayName", "IdleStore");
let k = new M(s.Z, {
    IDLE: P,
    AFK: w,
    SPEAKING: D,
    APP_STATE_UPDATE: x,
    OVERLAY_SET_NOT_IDLE: L,
    CHANNEL_SELECT: L,
    VOICE_CHANNEL_SELECT: L,
    WINDOW_FOCUS: L,
    OVERLAY_INITIALIZE: L,
    OVERLAY_SET_INPUT_LOCKED: L,
    USER_SETTINGS_PROTO_UPDATE: j,
});
