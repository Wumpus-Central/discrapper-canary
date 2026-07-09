n.d(t, { i: () => T });
var i = n(64700),
    l = n(17928),
    r = n(531260),
    c = n(287809),
    a = n(474090),
    s = n(526292),
    o = n(89366),
    _ = n(851746),
    u = n(202541);
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        n = (0, s.k5)(),
        T = (0, o.QQ)(),
        A = (0, r.A)(),
        E =
            t?.verified === !0 &&
            (0, a.YE)(t, u.PremiumTypes.TIER_2) &&
            A.fetched &&
            A.fractionalState !== u.xc.FP_ONLY &&
            !n &&
            !T;
    i.useEffect(() => {
        E && !e && _.A.checkAndFetchReferralsRemaining();
    }, [E, e]);
}
