r.d(n, {
    H: function () {
        return d;
    },
    J: function () {
        return f;
    }
});
var i = r(315314);
var a = r(610138);
var s = r(216116);
var o = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(981631);
function d(e) {
    let { applicationId: n, customId: r, referrerId: i } = e,
        a = new URL(c.Z5c.ACTIVITY_DETAILS(n), ''.concat(location.protocol, '//').concat(location.host)),
        s = a.searchParams;
    return null != i && s.set('referrer_id', i), null != r && s.set('custom_id', r), a.toString();
}
function f(e) {
    let { id: n, customInstallUrl: r, installParams: i, integrationTypesConfig: a } = e;
    if (null != r) return r;
    let s = new URLSearchParams();
    s.set('client_id', n);
    let o = null != a && Object.values(a).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null);
    if (null != i && !o) {
        let { permissions: e, scopes: n } = i;
        null != e && s.set('permissions', e), null != n && s.set('scope', n.join(' '));
    }
    return ''.concat(location.protocol, '//').concat(location.host).concat(c.Z5c.OAUTH2_AUTHORIZE, '?').concat(s.toString());
}
