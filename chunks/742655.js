n.d(t, { t8: () => d, YX: () => c, bM: () => l, MW: () => o });
let i = [
    { minimumQuantity: 5, percentOff: 5 },
    { minimumQuantity: 10, percentOff: 10 },
    { minimumQuantity: 20, percentOff: 15 },
];
var r = n(45938),
    a = n(682901);
let s = new Set([
    a.gD.PREMIUM_MONTH_TIER_0,
    a.gD.PREMIUM_YEAR_TIER_0,
    a.gD.PREMIUM_MONTH_TIER_2,
    a.gD.PREMIUM_3_MONTH_TIER_2,
    a.gD.PREMIUM_YEAR_TIER_2,
]);
function l(e) {
    return s.has(e);
}
function o(e) {
    let { isGift: t, giftRecipient: n, selectedPlanId: i } = e;
    return t && null == n && (0, r.Ik)(n) && null != i && l(i);
}
function d(e) {
    let t = null;
    for (let n of i) {
        if (e < n.minimumQuantity) break;
        t = n.percentOff;
    }
    return t;
}
function c(e, t) {
    var n;
    let i,
        r,
        a = d(t);
    if (null == a) return { discountAmount: 0, percentOff: null, total: e * t };
    let s =
        ((i = Math.floor((n = e * a) / 100)), (r = (n % 100) * 2) < 100 ? i : r > 100 ? i + 1 : i % 2 == 0 ? i : i + 1);
    return { discountAmount: s * t, percentOff: a, total: (e - s) * t };
}
