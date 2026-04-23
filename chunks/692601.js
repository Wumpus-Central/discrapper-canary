n.d(t, { T: () => A });
var i = n(627968),
    s = n(311907),
    l = n(419954),
    a = n(961350),
    r = n(670492),
    o = n(287809),
    d = n(780964),
    u = n(612714),
    c = n(272338),
    g = n(398336),
    m = n(865054),
    _ = n(985018);
let A = (0, l.E2)(d.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t.uHAJ5v)],
    usePredicate: function () {
        let e = (0, g.b)(),
            t = (0, m.A)(),
            n = (0, c.f)(),
            i = (0, s.bG)([a.default], () => a.default.hasTOTPEnabled());
        return !e && !t && n && i;
    },
    Component: function () {
        let e = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
            t = (0, s.bG)([r.A], () => r.A.togglingSMS);
        return null == e ? null : (0, i.jsx)(u.A, { currentUser: e, togglingSMS: t });
    },
});
