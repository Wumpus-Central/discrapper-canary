n.d(t, { Qg: () => s, Qs: () => a, Xm: () => l, yZ: () => o });
var i = n(590062);
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
function o(e) {
    let t = e.widgetTop && e.widgetBottom,
        n = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: n, hasAny: t || n };
}
function s(e) {
    let { installScope: t, previewReady: n, integrationInstalled: i, botPermissionsChanged: r } = e;
    return !!n && null != i && (!!r || ("user" !== t && !i));
}
