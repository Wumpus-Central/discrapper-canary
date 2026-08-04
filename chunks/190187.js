n.d(t, { i: () => A });
var i = n(582128),
    l = n(17928),
    c = n(531260),
    r = n(287809),
    a = n(474090),
    s = n(526292),
    o = n(89366),
    _ = n(851746),
    T = n(202541);
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        n = (0, s.k5)(),
        A = (0, o.QQ)(),
        E = (0, c.A)(),
        u =
            t?.verified === !0 &&
            (0, a.YE)(t, T.PremiumTypes.TIER_2) &&
            E.fetched &&
            E.fractionalState !== T.xc.FP_ONLY &&
            !n &&
            !A;
    i.useEffect(() => {
        u && !e && _.A.checkAndFetchReferralsRemaining();
    }, [u, e]);
}
