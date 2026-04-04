n.d(t, { c: () => x, f: () => _ }), n(321073);
var i = n(627968),
    s = n(311907),
    l = n(419954),
    a = n(961350),
    r = n(670492),
    o = n(287809),
    d = n(780964),
    c = n(767669),
    u = n(398336),
    m = n(865054),
    g = n(985018);
function _() {
    return (0, s.bG)([o.default], () => {
        let e = o.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
let x = (0, l.E2)(d.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function () {
        let e = (0, s.bG)([a.default], () => a.default.hasTOTPEnabled()),
            t = [g.intl.string(g.t.m0FidJ), g.intl.string(g.t.xZEzbu)];
        return e ? t.push(g.intl.string(g.t["D+aE7g"])) : t.push(g.intl.string(g.t.cDgKte)), t;
    },
    usePredicate: function () {
        let e = (0, u.b)(),
            t = (0, m.A)(),
            n = _();
        return !e && !t && n;
    },
    Component: function () {
        let e = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
            t = (0, s.bG)([r.A], () => r.A.getBackupCodes()),
            n = (0, s.bG)([a.default], () => a.default.hasTOTPEnabled());
        return null == e ? null : (0, i.jsx)(c.A, { backupCodes: t, currentUser: e, hasTOTPEnabled: n });
    },
});
