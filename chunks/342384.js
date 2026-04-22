n.d(t, { V: () => s, W: () => l }), n(323874), n(14289), n(35956);
var i = n(652215);
function l(e) {
    let { applicationId: t, customId: n, referrerId: l, linkId: s } = e,
        a = new URL(i.BVt.ACTIVITY_DETAILS(t), `${location.protocol}//${location.host}`),
        r = a.searchParams;
    return (
        null != s && r.set("link_id", s),
        null != l && r.set("referrer_id", l),
        null != n && r.set("custom_id", n),
        a.toString()
    );
}
function s(e) {
    let { id: t, customInstallUrl: n, installParams: l, integrationTypesConfig: s } = e;
    if (null != n) return n;
    let a = new URLSearchParams();
    a.set("client_id", t);
    let r =
        null != s && Object.values(s).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null);
    if (null != l && !r) {
        let { permissions: e, scopes: t } = l;
        null != e && a.set("permissions", e), null != t && a.set("scope", t.join(" "));
    }
    return `${location.protocol}//${location.host}${i.BVt.OAUTH2_AUTHORIZE}?${a.toString()}`;
}
