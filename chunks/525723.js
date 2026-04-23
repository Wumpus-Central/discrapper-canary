"use strict";
n.d(t, { $R: () => o, V_: () => a, vw: () => u });
var r = n(311907),
    i = n(590180),
    s = n(248352);
let a = (e) => {
        let t = o(e);
        return null == t ? null : t.amount;
    },
    o = (e) =>
        (function (e) {
            let t = (0, r.yK)([s.A], () => s.A.getUserDiscounts());
            if (null == e || 0 === e.length) return null;
            let n = null;
            for (let r of e) {
                let e = t.find((e) => e.discountId === r);
                null != e && (null == n || e?.amount > n.amount) && (n = e);
            }
            return n;
        })(e?.eligibleOffers),
    l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = o(e);
        return t ? null : n;
    },
    u = (e) => {
        let { skuId: t, isOrbsPurchase: n = !1 } = e,
            a = (0, r.yK)([s.A], () => s.A.getUserDiscounts()),
            o = (0, r.bG)([i.A], () => i.A.getProduct(t)),
            u = l(o, n),
            c = null != o,
            d = a.length > 0;
        return !!c && !!d && null == u;
    };
