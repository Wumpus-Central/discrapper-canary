n.d(t, { i: () => m });
var i = n(64700),
    a = n(17928),
    s = n(531260),
    r = n(287809),
    l = n(474090),
    c = n(526292),
    o = n(89366),
    d = n(851746),
    u = n(202541);
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, a.bG)([r.default], () => r.default.getCurrentUser()),
        n = (0, c.k5)(),
        m = (0, o.QQ)(),
        A = (0, s.A)(),
        g =
            t?.verified === !0 &&
            (0, l.YE)(t, u.PremiumTypes.TIER_2) &&
            A.fetched &&
            A.fractionalState !== u.xc.FP_ONLY &&
            !n &&
            !m;
    i.useEffect(() => {
        g && !e && d.A.checkAndFetchReferralsRemaining();
    }, [g, e]);
}
