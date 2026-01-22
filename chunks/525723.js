n.d(t, {
    $R: () => o,
    V_: () => s,
    vw: () => c,
}),
    n(896048);
var r = n(311907),
    i = n(590180),
    a = n(248352);
let s = (e) => {
        let t = o(e);
        return null == t ? null : t.amount;
    },
    o = (e) => {
        let t = (0, r.yK)([a.A], () => a.A.getUserDiscounts()),
            n = null == e ? void 0 : e.eligibleOffers;
        if (null == n || 0 === n.length) return null;
        let i = null;
        for (let e of n) {
            let n = t.find((t) => t.discountId === e);
            null != n && (null == i || (null == n ? void 0 : n.amount) > i.amount) && (i = n);
        }
        return i;
    },
    l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = o(e);
        return t ? null : n;
    },
    c = (e) => {
        let { skuId: t, isOrbsPurchase: n = !1 } = e,
            s = (0, r.yK)([a.A], () => a.A.getUserDiscounts()),
            o = (0, r.bG)([i.A], () => i.A.getProduct(t)),
            c = l(o, n),
            u = null != o,
            d = s.length > 0,
            f = null != c;
        return !!u && !!d && !f;
    };
