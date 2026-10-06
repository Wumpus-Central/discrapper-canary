t.d(n, { JR: () => d, Qg: () => s, Qs: () => a, Xm: () => i, yZ: () => u, yf: () => r });
var l = t(696645);
let o =
    221552 == t.j
        ? { frame: (e) => e.hasFrame, widget: (e) => e.hasProfileWidget, bot: (e) => !0 === e.hasBotDm }
        : null;
function i(e) {
    let n = l.NK.filter((n) => o[n](e));
    return {
        modes: n,
        defaultMode: n[0] ?? null,
        showModeSwitch: n.length > 1,
        profileState: (function (e) {
            let { installScope: n, ownerAuthorizationRevoked: t } = e;
            return "user" === n && !0 === t ? "unavailable-authorization-revoked" : "available";
        })(e),
    };
}
function a(e, n) {
    return null != e && n.modes.includes(e) ? e : n.defaultMode;
}
function r(e, n) {
    return ("frame" === n && e.modes.includes("frame")) || 0 === e.modes.length;
}
function u(e) {
    let n = e.widgetTop && e.widgetBottom,
        t = e.miniProfile;
    return { hasMainCard: n, hasPopoutCard: t, hasAny: n || t };
}
function s(e) {
    let { installScope: n, previewReady: t, integrationInstalled: l, botPermissionsChanged: o } = e;
    return !!t && null != l && (!!o || ("user" !== n && !l));
}
function d(e, n) {
    return n && "bot" === e;
}
