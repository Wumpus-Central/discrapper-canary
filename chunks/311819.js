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
var o = r(216116);
var s = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(981631);
function d(e) {
    let { applicationId: n, customId: r, referrerId: i } = e,
        a = new URL(c.Z5c.ACTIVITY_DETAILS(n), ''.concat(location.protocol, '//').concat(location.host)),
        o = a.searchParams;
    return null != i && o.set('referrer_id', i), null != r && o.set('custom_id', r), a.toString();
}
function f(e) {
    let { id: n, customInstallUrl: r, installParams: i, integrationTypesConfig: a } = e;
    if (null != r) return r;
    let o = new URLSearchParams();
    o.set('client_id', n);
    let s = null != a && Object.values(a).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null);
    if (null != i && !s) {
        let { permissions: e, scopes: n } = i;
        null != e && o.set('permissions', e), null != n && o.set('scope', n.join(' '));
    }
    return ''.concat(location.protocol, '//').concat(location.host).concat(c.Z5c.OAUTH2_AUTHORIZE, '?').concat(o.toString());
}
