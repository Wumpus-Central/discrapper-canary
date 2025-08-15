n.d(t, {
    I: () => a,
    t: () => o,
}),
    n(388685);
var r = n(442837),
    i = n(615006);
let a = (e) => {
        let t = o(e);
        return null == t ? null : t.amount;
    },
    o = (e) => {
        let t = (0, r.Wu)([i.Z], () => i.Z.getUserDiscounts()),
            n = null == e ? void 0 : e.eligibleOffers;
        if (null == n || 0 === n.length) return null;
        let a = null;
        for (let e of n) {
            let n = t.find((t) => t.discountId === e);
            null != n && (null == a || (null == n ? void 0 : n.amount) > a.amount) && (a = n);
        }
        return a;
    };
