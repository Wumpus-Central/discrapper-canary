n.d(e, { g: () => S });
var i = n(442837),
    l = n(509613),
    s = n(594174),
    u = n(313789),
    r = n(905935),
    a = n(968021),
    o = n(921356),
    T = n(388032);
let S = (0, l.ON)(u.n.ACCOUNT_ENABLE_MFA_SETTING, {
    useSearchTerms: () => [T.intl.string(T.t.m0FidJ)],
    usePredicate: function () {
        let t = (0, a.Y)(),
            e = (0, o.O)();
        return (0, i.e7)([s.default], () => {
            let n = s.default.getCurrentUser();
            return null != n && !n.mfaEnabled && !t && !e;
        });
    },
    Component: r.Z,
});
