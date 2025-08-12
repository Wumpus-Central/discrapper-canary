n.d(t, { I: () => o }), n(388685);
var r = n(442837),
    i = n(615006);
let o = (e) => {
    let t = (0, r.e7)([i.Z], () => i.Z.getUserDiscounts()),
        n = null == e ? void 0 : e.eligibleOffers;
    if (null == n || 0 === n.length) return null;
    let o = null;
    for (let e of n) {
        var a;
        let n = null == (a = t.find((t) => t.discountId === e)) ? void 0 : a.amount;
        null != n && (null == o || n > o) && (o = n);
    }
    return o;
};
