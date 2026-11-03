n.d(t, { Cu: () => d, RG: () => o, dI: () => s, o_: () => l });
var i = n(45938),
    r = n(202541);
let a = [r.gD.PREMIUM_MONTH_TIER_2, r.gD.PREMIUM_YEAR_TIER_2];
function s(e) {
    return e === r.gD.PREMIUM_MONTH_TIER_2 || e === r.gD.PREMIUM_YEAR_TIER_2;
}
function l(e) {
    switch (e) {
        case r.gD.PREMIUM_MONTH_TIER_2:
            return r.MM.PREMIUM_GIFT_MONTH_TIER_2;
        case r.gD.PREMIUM_YEAR_TIER_2:
            return r.MM.PREMIUM_GIFT_YEAR_TIER_2;
        default:
            return null;
    }
}
function o(e) {
    return [...a.filter((t) => e.includes(t)), ...e.filter((e) => !s(e))];
}
function d(e) {
    let { isGift: t, giftRecipient: n, planOptions: r } = e;
    return t && null != n && (0, i.Ik)(n) && r.some(s);
}
