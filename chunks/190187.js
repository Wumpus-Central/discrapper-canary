"use strict";
s.d(t, { i: () => E });
var r = s(64700),
    i = s(311907),
    n = s(531260),
    a = s(287809),
    l = s(474090),
    u = s(526292),
    c = s(89366),
    o = s(851746),
    d = s(788868);
let E = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        s = (0, u.k5)(),
        E = (0, c.QQ)(),
        _ = (0, n.A)(),
        R =
            t?.verified === !0 &&
            (0, l.YE)(t, d.PremiumTypes.TIER_2) &&
            _.fetched &&
            _.fractionalState !== d.xc.FP_ONLY &&
            !s &&
            !E;
    r.useEffect(() => {
        R && !e && o.A.checkAndFetchReferralsRemaining();
    }, [R, e]);
};
