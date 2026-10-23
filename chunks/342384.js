(n.d(l, { V: () => o, W: () => s }), n(323874), n(14289), n(35956));
var e = n(652215);
function s(t) {
    let { applicationId: l, customId: n, referrerId: s, linkId: o, channelId: i } = t,
        a = new URL(e.BVt.ACTIVITY_DETAILS(l), `${location.protocol}//${location.host}`),
        r = a.searchParams;
    return (
        null != o && r.set("link_id", o),
        null != s && r.set("referrer_id", s),
        null != n && r.set("custom_id", n),
        null != i && r.set("channel_id", i),
        a.toString()
    );
}
function o(t) {
    let { id: l, customInstallUrl: n, installParams: s, integrationTypesConfig: o } = t;
    if (null != n) return n;
    let i = new URLSearchParams();
    i.set("client_id", l);
    let a =
        null != o && Object.values(o).some((t) => t?.oauth2_install_params != null || t?.oauth2InstallParams != null);
    if (null != s && !a) {
        let { permissions: t, scopes: l } = s;
        (null != t && i.set("permissions", t), null != l && i.set("scope", l.join(" ")));
    }
    return `${location.protocol}//${location.host}${e.BVt.OAUTH2_AUTHORIZE}?${i.toString()}`;
}
