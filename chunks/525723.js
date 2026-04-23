"use strict";
n.d(t, { $R: () => o, V_: () => a, vw: () => d });
var i = n(17928),
    r = n(590180),
    s = n(248352);
let a = (e) => {
        let t = o(e);
        return null == t ? null : t.amount;
    },
    o = (e) =>
        (function (e) {
            let t = (0, i.yK)([s.A], () => s.A.getUserDiscounts());
            if (null == e || 0 === e.length) return null;
            let n = null;
            for (let i of e) {
                let e = t.find((e) => e.discountId === i);
                null != e && (null == n || e?.amount > n.amount) && (n = e);
            }
            return n;
        })(e?.eligibleOffers),
    l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = o(e);
        return t ? null : n;
    },
    d = (e) => {
        let { skuId: t, isOrbsPurchase: n = !1 } = e,
            a = (0, i.yK)([s.A], () => s.A.getUserDiscounts()),
            o = (0, i.bG)([r.A], () => r.A.getProduct(t)),
            d = l(o, n),
            _ = null != o,
            u = a.length > 0;
        return !!_ && !!u && null == d;
    };
