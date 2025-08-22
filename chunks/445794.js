n.d(t, {
    Iw: () => o,
    N3: () => c,
    t0: () => s,
}),
    n(388685);
var r = n(442837),
    i = n(597688),
    a = n(615006);
let o = (e) => {
        let t = s(e);
        return null == t ? null : t.amount;
    },
    s = (e) => {
        let t = (0, r.Wu)([a.Z], () => a.Z.getUserDiscounts()),
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
            n = s(e);
        return t ? null : n;
    },
    c = (e) => {
        let { skuId: t, isOrbsPurchase: n = !1 } = e,
            o = (0, r.Wu)([a.Z], () => a.Z.getUserDiscounts()),
            s = (0, r.e7)([i.Z], () => i.Z.getProduct(t)),
            c = l(s, n),
            u = null != s,
            d = o.length > 0,
            f = null != c;
        return !!u && !!d && !f;
    };
