n.d(t, { M: () => a });
var l = n(45938),
    i = n(202541);
let r = new Set([i.gD.PREMIUM_MONTH_TIER_2, i.gD.PREMIUM_YEAR_TIER_2]);
function a(e) {
    let { isGift: t, giftRecipient: n, selectedPlanId: i } = e;
    return t && null == n && (0, l.Ik)(n) && null != i && r.has(i);
}
