"use strict";
n.d(t, { $R: () => o, V_: () => s, vw: () => u });
var r = n(311907),
    i = n(590180),
    a = n(248352);
let s = (e) => {
        let t = o(e);
        return null == t ? null : t.amount;
    },
    o = (e) => {
        let t = (0, r.yK)([a.A], () => a.A.getUserDiscounts()),
            n = e?.eligibleOffers;
        if (null == n || 0 === n.length) return null;
        let i = null;
        for (let e of n) {
            let n = t.find((t) => t.discountId === e);
            null != n && (null == i || n?.amount > i.amount) && (i = n);
        }
        return i;
    },
    l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = o(e);
        return t ? null : n;
    },
    u = (e) => {
        let { skuId: t, isOrbsPurchase: n = !1 } = e,
            s = (0, r.yK)([a.A], () => a.A.getUserDiscounts()),
            o = (0, r.bG)([i.A], () => i.A.getProduct(t)),
            u = l(o, n),
            c = null != o,
            d = s.length > 0,
            _ = null != u;
        return !!c && !!d && !_;
    };
