n.d(t, { JR: () => h, P5: () => a, Qg: () => c, Qs: () => d, Xm: () => o, yZ: () => f, yf: () => s });
var l = n(951178),
    r = n(696645),
    u = n(373677);
let i =
    221552 == n.j
        ? {
              frame: (e) => e.hasFrame,
              widget: (e) => e.hasProfileWidget,
              overlay: (e) => !0 === e.hasOverlay,
              bot: (e) => !0 === e.hasBotDm,
          }
        : null;
function a(e, t) {
    let { legacy: n, widgetResolvable: r, botDmResolvable: i } = t;
    return null == e || 0 === e.length
        ? n
        : {
              hasFrame: (0, u.Hc)(e),
              hasProfileWidget: r && e.includes(l.q7.PROFILE_WIDGET),
              hasBotDm: i && (e.includes(l.q7.BOT) || e.includes(l.q7.APPLICATION_COMMANDS)),
          };
}
function o(e) {
    let t = r.N.filter((t) => i[t](e));
    return {
        modes: t,
        defaultMode: t[0] ?? null,
        showModeSwitch: t.length > 1,
        profileState: (function (e) {
            let { installScope: t, ownerAuthorizationRevoked: n } = e;
            return "user" === t && !0 === n ? "unavailable-authorization-revoked" : "available";
        })(e),
    };
}
function d(e, t) {
    return null != e && t.modes.includes(e) ? e : t.defaultMode;
}
function s(e, t) {
    return ("frame" === t && e.modes.includes("frame")) || 0 === e.modes.length;
}
function f(e) {
    let t = e.widgetTop && e.widgetBottom,
        n = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: n, hasAny: t || n };
}
function c(e) {
    let { installScope: t, previewReady: n, integrationInstalled: l, botPermissionsChanged: r } = e;
    return !!n && null != l && (!!r || ("user" !== t && !l));
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return !!t && ("bot" === e || (n && "frame" === e));
}
