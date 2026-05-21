n.d(t, { i: () => E });
var i = n(64700),
    l = n(17928),
    r = n(531260),
    s = n(287809),
    a = n(474090),
    c = n(526292),
    o = n(89366),
    d = n(851746),
    u = n(788868);
let E = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, c.k5)(),
        E = (0, o.QQ)(),
        A = (0, r.A)(),
        _ =
            t?.verified === !0 &&
            (0, a.YE)(t, u.PremiumTypes.TIER_2) &&
            A.fetched &&
            A.fractionalState !== u.xc.FP_ONLY &&
            !n &&
            !E;
    i.useEffect(() => {
        _ && !e && d.A.checkAndFetchReferralsRemaining();
    }, [_, e]);
};
