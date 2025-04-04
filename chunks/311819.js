n.d(t, {
    H: () => i,
    J: () => o
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(981631);
function i(e) {
    let { applicationId: t, customId: n, referrerId: i, linkId: o } = e,
        a = new URL(r.Z5c.ACTIVITY_DETAILS(t), ''.concat(location.protocol, '//').concat(location.host)),
        s = a.searchParams;
    return null != o && s.set('link_id', o), null != i && s.set('referrer_id', i), null != n && s.set('custom_id', n), a.toString();
}
function o(e) {
    let { id: t, customInstallUrl: n, installParams: i, integrationTypesConfig: o } = e;
    if (null != n) return n;
    let a = new URLSearchParams();
    a.set('client_id', t);
    let s = null != o && Object.values(o).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null);
    if (null != i && !s) {
        let { permissions: e, scopes: t } = i;
        null != e && a.set('permissions', e), null != t && a.set('scope', t.join(' '));
    }
    return ''.concat(location.protocol, '//').concat(location.host).concat(r.Z5c.OAUTH2_AUTHORIZE, '?').concat(a.toString());
}
