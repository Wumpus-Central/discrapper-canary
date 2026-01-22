n.d(t, {
    i: () => f,
});
var r = n(64700),
    i = n(311907),
    a = n(531260),
    s = n(287809),
    o = n(474090),
    l = n(526292),
    c = n(89366),
    u = n(851746),
    d = n(788868);
let f = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, l.k5)(),
        f = (0, c.QQ)(),
        p = (0, a.A)(),
        _ =
            (null == t ? void 0 : t.verified) === !0 &&
            (0, o.YE)(t, d.PremiumTypes.TIER_2) &&
            p.fetched &&
            p.fractionalState !== d.xc.FP_ONLY &&
            !n &&
            !f;
    r.useEffect(() => {
        _ && !e && u.A.checkAndFetchReferralsRemaining();
    }, [_, e]);
};
