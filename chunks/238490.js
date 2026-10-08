n.d(t, { JR: () => h, P5: () => o, Qg: () => f, Qs: () => d, Xm: () => a, yZ: () => s, yf: () => c });
var r = n(164892),
    u = n(696645),
    l = n(373677);
let i =
    221552 == n.j
        ? { frame: (e) => e.hasFrame, widget: (e) => e.hasProfileWidget, bot: (e) => !0 === e.hasBotDm }
        : null;
function o(e, t) {
    let { legacy: n, widgetResolvable: u, botDmResolvable: i } = t;
    return null == e || 0 === e.length
        ? n
        : {
              hasFrame: (0, l.Hc)(e),
              hasProfileWidget: u && e.includes(r.q7.PROFILE_WIDGET),
              hasBotDm: i && (e.includes(r.q7.BOT) || e.includes(r.q7.APPLICATION_COMMANDS)),
          };
}
function a(e) {
    let t = u.NK.filter((t) => i[t](e));
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
function c(e, t) {
    return ("frame" === t && e.modes.includes("frame")) || 0 === e.modes.length;
}
function s(e) {
    let t = e.widgetTop && e.widgetBottom,
        n = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: n, hasAny: t || n };
}
function f(e) {
    let { installScope: t, previewReady: n, integrationInstalled: r, botPermissionsChanged: u } = e;
    return !!n && null != r && (!!u || ("user" !== t && !r));
}
function h(e, t) {
    return t && "bot" === e;
}
