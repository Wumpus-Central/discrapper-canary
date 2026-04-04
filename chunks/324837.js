n.d(t, { v: () => u });
var i = n(311907),
    s = n(419954),
    l = n(287809),
    a = n(780964),
    r = n(370530),
    o = n(398336),
    d = n(865054),
    c = n(985018);
let u = (0, s.E2)(a.X.ACCOUNT_ENABLE_MFA_SETTING, {
    useSearchTerms: () => [c.intl.string(c.t.m0FidJ)],
    usePredicate: function () {
        let e = (0, o.b)(),
            t = (0, d.A)();
        return (0, i.bG)([l.default], () => {
            let n = l.default.getCurrentUser();
            return null != n && !n.mfaEnabled && !e && !t;
        });
    },
    Component: r.A,
});
