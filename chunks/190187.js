n.d(t, { i: () => m });
var i = n(64700),
    l = n(311907),
    a = n(531260),
    r = n(287809),
    s = n(474090),
    o = n(526292),
    d = n(89366),
    c = n(851746),
    u = n(788868);
let m = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        n = (0, o.k5)(),
        m = (0, d.QQ)(),
        _ = (0, a.A)(),
        h =
            t?.verified === !0 &&
            (0, s.YE)(t, u.PremiumTypes.TIER_2) &&
            _.fetched &&
            _.fractionalState !== u.xc.FP_ONLY &&
            !n &&
            !m;
    i.useEffect(() => {
        h && !e && c.A.checkAndFetchReferralsRemaining();
    }, [h, e]);
};
