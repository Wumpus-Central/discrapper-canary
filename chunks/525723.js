"use strict";
n.d(t, { V_: () => a, vw: () => l });
var i = n(17928),
    r = n(590180),
    s = n(248352);
function a(e) {
    let t = o(e);
    return null == t ? null : t.amount;
}
function o(e) {
    return (function (e) {
        let t = (0, i.yK)([s.A], () => s.A.getUserDiscounts());
        if (null == e || 0 === e.length) return null;
        let n = null;
        for (let i of e) {
            let e = t.find((e) => e.discountId === i);
            null != e && (null == n || e?.amount > n.amount) && (n = e);
        }
        return n;
    })(e?.eligibleOffers);
}
function l(e) {
    let { skuId: t, isOrbsPurchase: n = !1 } = e,
        a = (0, i.yK)([s.A], () => s.A.getUserDiscounts()),
        l = (0, i.bG)([r.A], () => r.A.getProduct(t)),
        u = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = o(e);
            return t ? null : n;
        })(l, n),
        c = null != l,
        d = a.length > 0;
    return !!c && !!d && null == u;
}
