l.d(t, { Qg: () => o, Qs: () => r, Xm: () => i, yZ: () => s });
var n = l(148853);
let a = { frame: (e) => e.hasFrame, widget: (e) => e.hasProfileWidget, bot: (e) => !0 === e.hasBotDm };
function i(e) {
    let t = n.uZ.filter((t) => a[t](e));
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
function r(e, t) {
    return null != e && t.modes.includes(e) ? e : t.defaultMode;
}
function s(e) {
    let t = e.widgetTop && e.widgetBottom,
        l = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: l, hasAny: t || l };
}
function o(e) {
    let { installScope: t, previewReady: l, integrationInstalled: n, botPermissionsChanged: a } = e;
    return !!l && null != n && (!!a || ("user" !== t && !n));
}
