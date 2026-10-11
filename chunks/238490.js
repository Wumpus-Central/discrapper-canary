l.d(t, { JR: () => h, P5: () => i, Qg: () => c, Qs: () => d, Xm: () => o, yZ: () => s, yf: () => f });
var n = l(951178),
    u = l(696645),
    r = l(373677);
let a =
    221552 == l.j
        ? {
              frame: (e) => e.hasFrame,
              widget: (e) => e.hasProfileWidget,
              overlay: (e) => !0 === e.hasOverlay,
              bot: (e) => !0 === e.hasBotDm,
          }
        : null;
function i(e, t) {
    let { legacy: l, widgetResolvable: u, botDmResolvable: a } = t;
    return null == e || 0 === e.length
        ? l
        : {
              hasFrame: (0, r.Hc)(e),
              hasProfileWidget: u && e.includes(n.q7.PROFILE_WIDGET),
              hasBotDm: a && (e.includes(n.q7.BOT) || e.includes(n.q7.APPLICATION_COMMANDS)),
          };
}
function o(e) {
    let t = u.NK.filter((t) => a[t](e));
    return {
        modes: t,
        defaultMode: t[0] ?? null,
        showModeSwitch: t.length > 1,
        profileState: (function (e) {
            let { installScope: t, ownerAuthorizationRevoked: l } = e;
            return "user" === t && !0 === l ? "unavailable-authorization-revoked" : "available";
        })(e),
    };
}
function d(e, t) {
    return null != e && t.modes.includes(e) ? e : t.defaultMode;
}
function f(e, t) {
    return ("frame" === t && e.modes.includes("frame")) || 0 === e.modes.length;
}
function s(e) {
    let t = e.widgetTop && e.widgetBottom,
        l = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: l, hasAny: t || l };
}
function c(e) {
    let { installScope: t, previewReady: l, integrationInstalled: n, botPermissionsChanged: u } = e;
    return !!l && null != n && (!!u || ("user" !== t && !n));
}
function h(e, t) {
    return t && "bot" === e;
}
