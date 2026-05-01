"use strict";
n.d(t, { i: () => _ });
var i = n(64700),
    r = n(17928),
    s = n(531260),
    a = n(287809),
    o = n(474090),
    l = n(367319),
    u = n(89366),
    c = n(851746),
    d = n(788868);
let _ = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        n = (0, l.k5)(),
        _ = (0, u.QQ)(),
        f = (0, s.A)(),
        h =
            t?.verified === !0 &&
            (0, o.YE)(t, d.PremiumTypes.TIER_2) &&
            f.fetched &&
            f.fractionalState !== d.xc.FP_ONLY &&
            !n &&
            !_;
    i.useEffect(() => {
        h && !e && c.A.checkAndFetchReferralsRemaining();
    }, [h, e]);
};
