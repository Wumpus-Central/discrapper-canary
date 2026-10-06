n.d(t, { JR: () => s, Qg: () => d, Qs: () => o, Xm: () => i, yZ: () => a, yf: () => l });
var r = n(696645);
let u =
    221552 == n.j
        ? { frame: (e) => e.hasFrame, widget: (e) => e.hasProfileWidget, bot: (e) => !0 === e.hasBotDm }
        : null;
function i(e) {
    let t = r.NK.filter((t) => u[t](e));
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
function o(e, t) {
    return null != e && t.modes.includes(e) ? e : t.defaultMode;
}
function l(e, t) {
    return ("frame" === t && e.modes.includes("frame")) || 0 === e.modes.length;
}
function a(e) {
    let t = e.widgetTop && e.widgetBottom,
        n = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: n, hasAny: t || n };
}
function d(e) {
    let { installScope: t, previewReady: n, integrationInstalled: r, botPermissionsChanged: u } = e;
    return !!n && null != r && (!!u || ("user" !== t && !r));
}
function s(e, t) {
    return t && "bot" === e;
}
