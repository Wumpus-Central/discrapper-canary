s.d(t, { i: () => o });
var c = s(582128),
    i = s(17928),
    a = s(531260),
    l = s(287809),
    d = s(474090),
    n = s(526292),
    r = s(89366),
    f = s(851746),
    h = s(202541);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        s = (0, n.k5)(),
        o = (0, r.QQ)(),
        p = (0, a.A)(),
        u =
            t?.verified === !0 &&
            (0, d.YE)(t, h.PremiumTypes.TIER_2) &&
            p.fetched &&
            p.fractionalState !== h.xc.FP_ONLY &&
            !s &&
            !o;
    c.useEffect(() => {
        u && !e && f.A.checkAndFetchReferralsRemaining();
    }, [u, e]);
}
