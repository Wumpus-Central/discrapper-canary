"use strict";
n.d(t, { $R: () => u, V_: () => l, Xi: () => o, vw: () => d });
var r = n(311907),
    i = n(590180),
    s = n(248352);
function a(e) {
    let t = (0, r.yK)([s.A], () => s.A.getUserDiscounts());
    if (null == e || 0 === e.length) return null;
    let n = null;
    for (let r of e) {
        let e = t.find((e) => e.discountId === r);
        null != e && (null == n || e?.amount > n.amount) && (n = e);
    }
    return n;
}
let o = (e) => a(e?.eligibleOffers),
    l = (e) => {
        let t = u(e);
        return null == t ? null : t.amount;
    },
    u = (e) => a(e?.eligibleOffers),
    c = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = u(e);
        return t ? null : n;
    },
    d = (e) => {
        let { skuId: t, isOrbsPurchase: n = !1 } = e,
            a = (0, r.yK)([s.A], () => s.A.getUserDiscounts()),
            o = (0, r.bG)([i.A], () => i.A.getProduct(t)),
            l = c(o, n),
            u = null != o,
            d = a.length > 0,
            _ = null != l;
        return !!u && !!d && !_;
    };
