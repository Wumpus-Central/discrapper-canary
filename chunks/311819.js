n.d(t, {
    H: () => r,
    J: () => a
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(981631);
function r(e) {
    let { applicationId: t, customId: n, referrerId: r } = e,
        a = new URL(i.Z5c.ACTIVITY_DETAILS(t), ''.concat(location.protocol, '//').concat(location.host)),
        s = a.searchParams;
    return null != r && s.set('referrer_id', r), null != n && s.set('custom_id', n), a.toString();
}
function a(e) {
    let { id: t, customInstallUrl: n, installParams: r, integrationTypesConfig: a } = e;
    if (null != n) return n;
    let s = new URLSearchParams();
    s.set('client_id', t);
    let o = null != a && Object.values(a).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null);
    if (null != r && !o) {
        let { permissions: e, scopes: t } = r;
        null != e && s.set('permissions', e), null != t && s.set('scope', t.join(' '));
    }
    return ''.concat(location.protocol, '//').concat(location.host).concat(i.Z5c.OAUTH2_AUTHORIZE, '?').concat(s.toString());
}
