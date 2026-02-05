i.d(e, { v: () => T });
var n = i(311907),
    l = i(419954),
    s = i(287809),
    r = i(780964),
    a = i(858526),
    u = i(32096),
    o = i(545214),
    d = i(985018);
let T = (0, l.E2)(r.X.ACCOUNT_ENABLE_MFA_SETTING, {
    useSearchTerms: () => [d.intl.string(d.t.m0FidJ)],
    usePredicate: function () {
        let t = (0, u.b)(),
            e = (0, o.A)();
        return (0, n.bG)([s.default], () => {
            let i = s.default.getCurrentUser();
            return null != i && !i.mfaEnabled && !t && !e;
        });
    },
    Component: a.A,
});
