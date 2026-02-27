"use strict";
l.d(t, { A: () => h, F: () => m }), l(321073);
var r = l(855104),
    a = l(151252),
    n = l(287809),
    i = l(927578),
    s = l(623373),
    o = l(561769),
    d = l(652215);
let c = (e) => {
        let { product: t, isPremiumUser: l } = e,
            { enabled: r } = (0, a.m)({ location: "getShopBasePricingData" }),
            n = r ? (0, s.CW)({ product: t, isPremiumUser: l }) : void 0;
        return {
            orbPrice: n,
            fiatPrice: (0, s.$K)({ product: t, isPremiumUser: l }) ?? void 0,
            isOrbExclusive: !!r && (0, s.Ab)(t),
        };
    },
    u = (e) => {
        let {
                hasSufficientOrbs: t,
                orbPrice: l,
                fiatPrice: r,
                isOrbExclusive: a,
                hasDiscountOffer: n = !1,
                prioritizedCurrency: i = null,
            } = e,
            s = [],
            c = i === o.Hi.ORBS;
        null != l && null != r
            ? c || (t && !n)
                ? s.push(l, r)
                : s.push(r, l)
            : null != l
              ? s.push(l)
              : null != r && s.push(r);
        let u = s.length > 0 && s[0]?.currency === d.Yri.DISCORD_ORB;
        return { checkoutEligiblePrices: s, isOrbExclusive: a, hasSufficientOrbs: t, shouldCheckoutWithOrbs: u };
    },
    h = (e) => {
        let { product: t } = e,
            l = (0, r.r_)(),
            a = n.default.getCurrentUser(),
            {
                orbPrice: s,
                fiatPrice: o,
                isOrbExclusive: d,
            } = c({ product: t, isPremiumUser: i.Ay.canUseCollectibles(a) }),
            h = null != s && null != l && l >= s.amount,
            { shouldCheckoutWithOrbs: m } = u({ orbPrice: s, fiatPrice: o, isOrbExclusive: d, hasSufficientOrbs: h });
        return m;
    };
function m(e) {
    let { product: t, isPremiumUser: l, prioritizedCurrency: a, hasDiscountOffer: n = !1 } = e,
        { orbPrice: i, fiatPrice: s, isOrbExclusive: o } = c({ product: t, isPremiumUser: l }),
        d = (0, r.kj)(null != i ? i.amount : null);
    return u({
        orbPrice: i,
        fiatPrice: s,
        isOrbExclusive: o,
        hasSufficientOrbs: d,
        hasDiscountOffer: n,
        prioritizedCurrency: a,
    });
}
