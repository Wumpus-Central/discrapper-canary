n.d(t, {
    H: () => i,
    J: () => a
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var r = n(981631);
function i(e) {
    let { applicationId: t, customId: n, referrerId: i, linkId: a } = e,
        o = new URL(r.Z5c.ACTIVITY_DETAILS(t), ''.concat(location.protocol, '//').concat(location.host)),
        s = o.searchParams;
    return null != a && s.set('link_id', a), null != i && s.set('referrer_id', i), null != n && s.set('custom_id', n), o.toString();
}
function a(e) {
    let { id: t, customInstallUrl: n, installParams: i, integrationTypesConfig: a } = e;
    if (null != n) return n;
    let o = new URLSearchParams();
    o.set('client_id', t);
    let s = null != a && Object.values(a).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null);
    if (null != i && !s) {
        let { permissions: e, scopes: t } = i;
        null != e && o.set('permissions', e), null != t && o.set('scope', t.join(' '));
    }
    return ''.concat(location.protocol, '//').concat(location.host).concat(r.Z5c.OAUTH2_AUTHORIZE, '?').concat(o.toString());
}
