n.d(t, { i: () => h });
var i = n(64700),
    l = n(17928),
    s = n(531260),
    r = n(287809),
    a = n(474090),
    o = n(526292),
    d = n(89366),
    c = n(851746),
    u = n(788868);
let h = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        n = (0, o.k5)(),
        h = (0, d.QQ)(),
        A = (0, s.A)(),
        _ =
            t?.verified === !0 &&
            (0, a.YE)(t, u.PremiumTypes.TIER_2) &&
            A.fetched &&
            A.fractionalState !== u.xc.FP_ONLY &&
            !n &&
            !h;
    i.useEffect(() => {
        _ && !e && c.A.checkAndFetchReferralsRemaining();
    }, [_, e]);
};
