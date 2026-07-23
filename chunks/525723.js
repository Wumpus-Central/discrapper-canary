n.d(t, { V_: () => r });
var l = n(17928),
    i = n(248352);
function r(e) {
    var t;
    let n =
        ((t = e),
        (function (e) {
            let t = (0, l.yK)([i.A], () => i.A.getUserDiscounts());
            if (null == e || 0 === e.length) return null;
            let n = null;
            for (let l of e) {
                let e = t.find((e) => e.discountId === l);
                null != e && (null == n || e?.amount > n.amount) && (n = e);
            }
            return n;
        })(t?.eligibleOffers));
    return null == n ? null : n.amount;
}
