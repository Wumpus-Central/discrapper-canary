n.d(t, {
    I: () => o,
    t: () => a,
}),
    n(388685);
var r = n(442837),
    i = n(615006);
let o = (e) => {
        let t = a(e);
        return null == t ? null : t.amount;
    },
    a = (e) => {
        let t = (0, r.Wu)([i.Z], () => i.Z.getUserDiscounts()),
            n = null == e ? void 0 : e.eligibleOffers;
        if (null == n || 0 === n.length) return null;
        let o = null;
        for (let e of n) {
            let n = t.find((t) => t.discountId === e);
            null != n && (null == o || (null == n ? void 0 : n.amount) > o.amount) && (o = n);
        }
        return o;
    };
