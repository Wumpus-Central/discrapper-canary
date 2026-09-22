n.d(t, { i: () => _ });
var i = n(582128),
    l = n(17928),
    r = n(531260),
    s = n(287809),
    a = n(474090),
    o = n(526292),
    E = n(89366),
    c = n(851746),
    u = n(202541);
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, o.k5)(),
        _ = (0, E.QQ)(),
        A = (0, r.A)(),
        T =
            t?.verified === !0 &&
            (0, a.YE)(t, u.PremiumTypes.TIER_2) &&
            A.fetched &&
            A.fractionalState !== u.xc.FP_ONLY &&
            !n &&
            !_;
    i.useEffect(() => {
        T && !e && c.A.checkAndFetchReferralsRemaining();
    }, [T, e]);
}
