n.d(t, { i: () => T });
var i = n(582128),
    l = n(17928),
    c = n(531260),
    r = n(287809),
    s = n(474090),
    o = n(526292),
    a = n(89366),
    _ = n(851746),
    A = n(202541);
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        n = (0, o.k5)(),
        T = (0, a.QQ)(),
        E = (0, c.A)(),
        I =
            t?.verified === !0 &&
            (0, s.YE)(t, A.PremiumTypes.TIER_2) &&
            E.fetched &&
            E.fractionalState !== A.xc.FP_ONLY &&
            !n &&
            !T;
    i.useEffect(() => {
        I && !e && _.A.checkAndFetchReferralsRemaining();
    }, [I, e]);
}
