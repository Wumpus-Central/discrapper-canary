s.d(t, { i: () => f });
var a = s(582128),
    l = s(17928),
    i = s(531260),
    c = s(287809),
    n = s(474090),
    r = s(526292),
    h = s(89366),
    d = s(851746),
    o = s(202541);
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        s = (0, r.k5)(),
        f = (0, h.QQ)(),
        g = (0, i.A)(),
        p =
            t?.verified === !0 &&
            (0, n.YE)(t, o.PremiumTypes.TIER_2) &&
            g.fetched &&
            g.fractionalState !== o.xc.FP_ONLY &&
            !s &&
            !f;
    a.useEffect(() => {
        p && !e && d.A.checkAndFetchReferralsRemaining();
    }, [p, e]);
}
