"use strict";
a.d(t, { A: () => h, F: () => p }), a(321073);
var r = a(855104),
    l = a(270051),
    n = a(287809),
    i = a(927578),
    s = a(623373),
    o = a(561769),
    d = a(652215);
let c = (e) => {
        let { product: t, isPremiumUser: a } = e,
            { enabled: r } = (0, l.m)({ location: "getShopBasePricingData" }),
            n = r ? (0, s.CW)({ product: t, isPremiumUser: a }) : void 0;
        return {
            orbPrice: n,
            fiatPrice: (0, s.$K)({ product: t, isPremiumUser: a }) ?? void 0,
            isOrbExclusive: (0, s.Ab)(t),
        };
    },
    u = (e) => {
        let {
                hasSufficientOrbs: t,
                orbPrice: a,
                fiatPrice: r,
                isOrbExclusive: l,
                hasDiscountOffer: n = !1,
                prioritizedCurrency: i = null,
            } = e,
            s = [],
            c = i === o.Hi.ORBS,
            u = i === o.Hi.FIAT;
        null != a && null != r
            ? c || (!u && t && !n)
                ? s.push(a, r)
                : s.push(r, a)
            : null != a
              ? s.push(a)
              : null != r && s.push(r);
        let h = s.length > 0 && s[0]?.currency === d.Yri.DISCORD_ORB;
        return { checkoutEligiblePrices: s, isOrbExclusive: l, hasSufficientOrbs: t, shouldCheckoutWithOrbs: h };
    },
    h = (e) => {
        let { product: t, prioritizedCurrency: a } = e,
            l = (0, r.r_)(),
            s = n.default.getCurrentUser(),
            {
                orbPrice: o,
                fiatPrice: d,
                isOrbExclusive: h,
            } = c({ product: t, isPremiumUser: i.Ay.canUseCollectibles(s) }),
            p = null != o && null != l && l >= o.amount,
            { shouldCheckoutWithOrbs: _ } = u({
                orbPrice: o,
                fiatPrice: d,
                isOrbExclusive: h,
                hasSufficientOrbs: p,
                prioritizedCurrency: a ?? null,
            });
        return _;
    };
function p(e) {
    let { product: t, isPremiumUser: a, prioritizedCurrency: l, hasDiscountOffer: n = !1 } = e,
        { orbPrice: i, fiatPrice: s, isOrbExclusive: o } = c({ product: t, isPremiumUser: a }),
        d = (0, r.kj)(null != i ? i.amount : null);
    return u({
        orbPrice: i,
        fiatPrice: s,
        isOrbExclusive: o,
        hasSufficientOrbs: d,
        hasDiscountOffer: n,
        prioritizedCurrency: l,
    });
}
