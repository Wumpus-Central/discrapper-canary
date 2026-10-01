i.d(t, { i: () => o });
var l = i(582128),
    s = i(17928),
    a = i(531260),
    c = i(287809),
    n = i(474090),
    r = i(526292),
    d = i(89366),
    h = i(851746),
    f = i(202541);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        i = (0, r.k5)(),
        o = (0, d.QQ)(),
        u = (0, a.A)(),
        p =
            t?.verified === !0 &&
            (0, n.YE)(t, f.PremiumTypes.TIER_2) &&
            u.fetched &&
            u.fractionalState !== f.xc.FP_ONLY &&
            !i &&
            !o;
    l.useEffect(() => {
        p && !e && h.A.checkAndFetchReferralsRemaining();
    }, [p, e]);
}
