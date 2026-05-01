i.d(t, { i: () => m });
var s = i(64700),
    a = i(17928),
    n = i(531260),
    r = i(287809),
    l = i(474090),
    c = i(367319),
    d = i(89366),
    o = i(851746),
    u = i(788868);
let m = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, a.bG)([r.default], () => r.default.getCurrentUser()),
        i = (0, c.k5)(),
        m = (0, d.QQ)(),
        A = (0, n.A)(),
        p =
            t?.verified === !0 &&
            (0, l.YE)(t, u.PremiumTypes.TIER_2) &&
            A.fetched &&
            A.fractionalState !== u.xc.FP_ONLY &&
            !i &&
            !m;
    s.useEffect(() => {
        p && !e && o.A.checkAndFetchReferralsRemaining();
    }, [p, e]);
};
