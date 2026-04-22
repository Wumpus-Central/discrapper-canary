n.d(t, { $R: () => s, V_: () => r, vw: () => u });
var l = n(311907),
    i = n(590180),
    a = n(248352);
let r = (e) => {
        let t = s(e);
        return null == t ? null : t.amount;
    },
    s = (e) =>
        (function (e) {
            let t = (0, l.yK)([a.A], () => a.A.getUserDiscounts());
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
            r = (0, l.yK)([a.A], () => a.A.getUserDiscounts()),
            s = (0, l.bG)([i.A], () => i.A.getProduct(t)),
            u = o(s, n),
            c = null != s,
            d = r.length > 0;
        return !!c && !!d && null == u;
    };
