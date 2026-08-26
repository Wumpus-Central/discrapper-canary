n.d(t, { Qg: () => o, Qs: () => s, Xm: () => r, yZ: () => i });
var l = n(148853);
let a = { frame: (e) => e.hasFrame, widget: (e) => e.hasProfileWidget, bot: (e) => !0 === e.hasBotDm };
function r(e) {
    let t = l.uZ.filter((t) => a[t](e));
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
function s(e, t) {
    return null != e && t.modes.includes(e) ? e : t.defaultMode;
}
function i(e) {
    let t = e.widgetTop && e.widgetBottom,
        n = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: n, hasAny: t || n };
}
function o(e) {
    let { installScope: t, previewReady: n, integrationInstalled: l, botPermissionsChanged: a } = e;
    return !!n && null != l && (!!a || ("user" !== t && !l));
}
