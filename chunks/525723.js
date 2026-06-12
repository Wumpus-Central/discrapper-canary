n.d(t, { $R: () => s, V_: () => a, vw: () => u });
var l = n(17928),
    r = n(590180),
    i = n(248352);
let a = (e) => {
        let t = s(e);
        return null == t ? null : t.amount;
    },
    s = (e) =>
        (function (e) {
            let t = (0, l.yK)([i.A], () => i.A.getUserDiscounts());
            if (null == e || 0 === e.length) return null;
            let n = null;
            for (let l of e) {
                let e = t.find((e) => e.discountId === l);
                null != e && (null == n || e?.amount > n.amount) && (n = e);
            }
            return n;
        })(e?.eligibleOffers),
    o = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = s(e);
        return t ? null : n;
    },
    u = (e) => {
        let { skuId: t, isOrbsPurchase: n = !1 } = e,
            a = (0, l.yK)([i.A], () => i.A.getUserDiscounts()),
            s = (0, l.bG)([r.A], () => r.A.getProduct(t)),
            u = o(s, n),
            c = null != s,
            d = a.length > 0;
        return !!c && !!d && null == u;
    };
