n.d(t, { i: () => d });
var i = n(582128),
    l = n(17928),
    r = n(531260),
    s = n(287809),
    a = n(474090),
    o = n(526292),
    c = n(89366),
    E = n(851746),
    u = n(202541);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, o.k5)(),
        d = (0, c.QQ)(),
        _ = (0, r.A)(),
        A =
            t?.verified === !0 &&
            (0, a.YE)(t, u.PremiumTypes.TIER_2) &&
            _.fetched &&
            _.fractionalState !== u.xc.FP_ONLY &&
            !n &&
            !d;
    i.useEffect(() => {
        A && !e && E.A.checkAndFetchReferralsRemaining();
    }, [A, e]);
}
