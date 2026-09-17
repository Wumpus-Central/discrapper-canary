t.d(n, { i: () => T });
var i = t(582128),
    l = t(17928),
    c = t(531260),
    r = t(287809),
    o = t(474090),
    s = t(526292),
    a = t(89366),
    _ = t(851746),
    A = t(202541);
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        t = (0, s.k5)(),
        T = (0, a.QQ)(),
        u = (0, c.A)(),
        E =
            n?.verified === !0 &&
            (0, o.YE)(n, A.PremiumTypes.TIER_2) &&
            u.fetched &&
            u.fractionalState !== A.xc.FP_ONLY &&
            !t &&
            !T;
    i.useEffect(() => {
        E && !e && _.A.checkAndFetchReferralsRemaining();
    }, [E, e]);
}
