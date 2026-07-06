n.d(t, { V_: () => a, vw: () => o });
var l = n(17928),
    i = n(590180),
    r = n(248352);
function a(e) {
    let t = s(e);
    return null == t ? null : t.amount;
}
function s(e) {
    return (function (e) {
        let t = (0, l.yK)([r.A], () => r.A.getUserDiscounts());
        if (null == e || 0 === e.length) return null;
        let n = null;
        for (let l of e) {
            let e = t.find((e) => e.discountId === l);
            null != e && (null == n || e?.amount > n.amount) && (n = e);
        }
        return n;
    })(e?.eligibleOffers);
}
function o(e) {
    let { skuId: t, isOrbsPurchase: n = !1 } = e,
        a = (0, l.yK)([r.A], () => r.A.getUserDiscounts()),
        o = (0, l.bG)([i.A], () => i.A.getProduct(t)),
        u = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = s(e);
            return t ? null : n;
        })(o, n),
        c = null != o,
        d = a.length > 0;
    return !!c && !!d && null == u;
}
