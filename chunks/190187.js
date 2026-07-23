"use strict";
n.d(t, { i: () => _ });
var i = n(64700),
    r = n(17928),
    a = n(531260),
    s = n(287809),
    l = n(474090),
    o = n(526292),
    d = n(89366),
    c = n(851746),
    u = n(202541);
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, o.k5)(),
        _ = (0, d.QQ)(),
        E = (0, a.A)(),
        A =
            t?.verified === !0 &&
            (0, l.YE)(t, u.PremiumTypes.TIER_2) &&
            E.fetched &&
            E.fractionalState !== u.xc.FP_ONLY &&
            !n &&
            !_;
    i.useEffect(() => {
        A && !e && c.A.checkAndFetchReferralsRemaining();
    }, [A, e]);
}
