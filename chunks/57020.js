"use strict";
a.d(t, { A: () => x, F: () => h }), a(321073);
var l = a(855104),
    r = a(151252),
    n = a(287809),
    s = a(927578),
    i = a(623373),
    o = a(561769),
    d = a(652215);
let c = (e) => {
        let { product: t, isPremiumUser: a } = e,
            { enabled: l } = (0, r.m)({ location: "getShopBasePricingData" }),
            n = l ? (0, i.CW)({ product: t, isPremiumUser: a }) : void 0;
        return {
            orbPrice: n,
            fiatPrice: (0, i.$K)({ product: t, isPremiumUser: a }) ?? void 0,
            isOrbExclusive: !!l && (0, i.Ab)(t),
        };
    },
    u = (e) => {
        let {
                hasSufficientOrbs: t,
                orbPrice: a,
                fiatPrice: l,
                isOrbExclusive: r,
                hasDiscountOffer: n = !1,
                prioritizedCurrency: s = null,
            } = e,
            i = [],
            c = s === o.Hi.ORBS;
        null != a && null != l
            ? c || (t && !n)
                ? i.push(a, l)
                : i.push(l, a)
            : null != a
              ? i.push(a)
              : null != l && i.push(l);
        let u = i.length > 0 && i[0]?.currency === d.Yri.DISCORD_ORB;
        return { checkoutEligiblePrices: i, isOrbExclusive: r, hasSufficientOrbs: t, shouldCheckoutWithOrbs: u };
    },
    x = (e) => {
        let { product: t } = e,
            a = (0, l.r_)(),
            r = n.default.getCurrentUser(),
            {
                orbPrice: i,
                fiatPrice: o,
                isOrbExclusive: d,
            } = c({ product: t, isPremiumUser: s.Ay.canUseCollectibles(r) }),
            x = null != i && null != a && a >= i.amount,
            { shouldCheckoutWithOrbs: h } = u({ orbPrice: i, fiatPrice: o, isOrbExclusive: d, hasSufficientOrbs: x });
        return h;
    };
function h(e) {
    let { product: t, isPremiumUser: a, prioritizedCurrency: r, hasDiscountOffer: n = !1 } = e,
        { orbPrice: s, fiatPrice: i, isOrbExclusive: o } = c({ product: t, isPremiumUser: a }),
        d = (0, l.kj)(null != s ? s.amount : null);
    return u({
        orbPrice: s,
        fiatPrice: i,
        isOrbExclusive: o,
        hasSufficientOrbs: d,
        hasDiscountOffer: n,
        prioritizedCurrency: r,
    });
}
