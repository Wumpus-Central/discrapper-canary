r.d(n, {
    H: function () {
        return c;
    },
    J: function () {
        return d;
    }
});
var i = r(610138);
var a = r(216116);
var s = r(78328);
var o = r(815648);
var l = r(47120);
var u = r(981631);
function c(e) {
    let { applicationId: n, customId: r, referrerId: i } = e,
        a = new URLSearchParams();
    return null != i && a.set('referrer_id', i), null != r && a.set('custom_id', r), ''.concat(location.protocol, '//').concat(location.host).concat(u.Z5c.ACTIVITY_DETAILS(n), '?').concat(a.toString());
}
function d(e) {
    let { id: n, customInstallUrl: r, installParams: i, integrationTypesConfig: a } = e;
    if (null != r) return r;
    let s = new URLSearchParams();
    s.set('client_id', n);
    let o = null != a && Object.values(a).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null);
    if (null != i && !o) {
        let { permissions: e, scopes: n } = i;
        null != e && s.set('permissions', e), null != n && s.set('scope', n.join(' '));
    }
    return ''.concat(location.protocol, '//').concat(location.host).concat(u.Z5c.OAUTH2_AUTHORIZE, '?').concat(s.toString());
}
