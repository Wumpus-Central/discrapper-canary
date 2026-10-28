n.d(t, { YX: () => u, bM: () => s, MW: () => o });
let l = [
    { minimumQuantity: 5, percentOff: 5 },
    { minimumQuantity: 10, percentOff: 10 },
    { minimumQuantity: 20, percentOff: 15 },
];
var i = n(45938),
    r = n(202541);
let a = new Set([r.gD.PREMIUM_MONTH_TIER_2, r.gD.PREMIUM_3_MONTH_TIER_2, r.gD.PREMIUM_YEAR_TIER_2]);
function s(e) {
    return a.has(e);
}
function o(e) {
    let { isGift: t, giftRecipient: n, selectedPlanId: l } = e;
    return t && null == n && (0, i.Ik)(n) && null != l && s(l);
}
function u(e, t) {
    var n;
    let i,
        r,
        a = (function (e) {
            let t = null;
            for (let n of l) {
                if (e < n.minimumQuantity) break;
                t = n.percentOff;
            }
            return t;
        })(t);
    if (null == a) return { discountAmount: 0, percentOff: null, total: e * t };
    let s =
        ((i = Math.floor((n = e * a) / 100)), (r = (n % 100) * 2) < 100 ? i : r > 100 ? i + 1 : i % 2 == 0 ? i : i + 1);
    return { discountAmount: s * t, percentOff: a, total: (e - s) * t };
}
