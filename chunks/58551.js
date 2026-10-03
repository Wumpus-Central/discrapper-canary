n.d(t, { Qg: () => o, Qs: () => a, Xm: () => l, yZ: () => s });
var i = n(753514);
let r =
    221552 == n.j
        ? { frame: (e) => e.hasFrame, widget: (e) => e.hasProfileWidget, bot: (e) => !0 === e.hasBotDm }
        : null;
function l(e) {
    let t = i.uZ.filter((t) => r[t](e));
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
function s(e) {
    let t = e.widgetTop && e.widgetBottom,
        n = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: n, hasAny: t || n };
}
function o(e) {
    let { installScope: t, previewReady: n, integrationInstalled: i, botPermissionsChanged: r } = e;
    return !!n && null != i && (!!r || ("user" !== t && !i));
}
