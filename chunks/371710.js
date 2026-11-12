var i = n(45938),
    r = n(682901);
let a = [r.gD.PREMIUM_MONTH_TIER_2, r.gD.PREMIUM_YEAR_TIER_2];
function s(e) {
    return e === r.gD.PREMIUM_MONTH_TIER_2 || e === r.gD.PREMIUM_YEAR_TIER_2;
}
n.d(
    t,
    {},
    {
        Cu: function (e) {
            let { isGift: t, giftRecipient: n, planOptions: r } = e;
            return t && null != n && (0, i.Ik)(n) && r.some(s);
        },
        RG: function (e) {
            return [...a.filter((t) => e.includes(t)), ...e.filter((e) => !s(e))];
        },
        dI: s,
        o_: function (e) {
            switch (e) {
                case r.gD.PREMIUM_MONTH_TIER_2:
                    return r.MM.PREMIUM_GIFT_MONTH_TIER_2;
                case r.gD.PREMIUM_YEAR_TIER_2:
                    return r.MM.PREMIUM_GIFT_YEAR_TIER_2;
                default:
                    return null;
            }
        },
        t$: function (e) {
            switch (e) {
                case r.MM.PREMIUM_GIFT_MONTH_TIER_2:
                    return r.gD.PREMIUM_MONTH_TIER_2;
                case r.MM.PREMIUM_GIFT_YEAR_TIER_2:
                    return r.gD.PREMIUM_YEAR_TIER_2;
                default:
                    return null;
            }
        },
    },
);
