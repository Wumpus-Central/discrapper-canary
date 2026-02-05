"use strict";
n.d(t, { V: () => a, W: () => i }), n(323874), n(14289), n(35956);
var r = n(652215);
function i(e) {
    let { applicationId: t, customId: n, referrerId: i, linkId: a } = e,
        s = new URL(r.BVt.ACTIVITY_DETAILS(t), `${location.protocol}//${location.host}`),
        o = s.searchParams;
    return (
        null != a && o.set("link_id", a),
        null != i && o.set("referrer_id", i),
        null != n && o.set("custom_id", n),
        s.toString()
    );
}
function a(e) {
    let { id: t, customInstallUrl: n, installParams: i, integrationTypesConfig: a } = e;
    if (null != n) return n;
    let s = new URLSearchParams();
    s.set("client_id", t);
    let o =
        null != a && Object.values(a).some((e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null);
    if (null != i && !o) {
        let { permissions: e, scopes: t } = i;
        null != e && s.set("permissions", e), null != t && s.set("scope", t.join(" "));
    }
    return `${location.protocol}//${location.host}${r.BVt.OAUTH2_AUTHORIZE}?${s.toString()}`;
}
