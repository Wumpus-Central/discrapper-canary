n.d(t, { JR: () => d, Qg: () => u, Qs: () => a, Xm: () => l, yZ: () => s, yf: () => o });
var i = n(696645);
let r =
    221552 == n.j
        ? { frame: (e) => e.hasFrame, widget: (e) => e.hasProfileWidget, bot: (e) => !0 === e.hasBotDm }
        : null;
function l(e) {
    let t = i.NK.filter((t) => r[t](e));
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
function a(e, t) {
    return null != e && t.modes.includes(e) ? e : t.defaultMode;
}
function o(e, t) {
    return ("frame" === t && e.modes.includes("frame")) || 0 === e.modes.length;
}
function s(e) {
    let t = e.widgetTop && e.widgetBottom,
        n = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: n, hasAny: t || n };
}
function u(e) {
    let { installScope: t, previewReady: n, integrationInstalled: i, botPermissionsChanged: r } = e;
    return !!n && null != i && (!!r || ("user" !== t && !i));
}
function d(e, t) {
    return t && "bot" === e;
}
