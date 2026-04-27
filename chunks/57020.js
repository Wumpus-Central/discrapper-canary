"use strict";
n.d(t, { A: () => _, F: () => p }), n(321073);
var a = n(855104),
    r = n(270051),
    i = n(287809),
    l = n(927578),
    s = n(623373),
    o = n(561769),
    c = n(652215);
let d = (e) => {
        let { product: t, hasShopDiscount: n } = e,
            { enabled: a } = (0, r.m)({ location: "getShopBasePricingData" }),
            i = a ? (0, s.CW)({ product: t, hasShopDiscount: n }) : void 0;
        return {
            orbPrice: i,
            fiatPrice: (0, s.$K)({ product: t, hasShopDiscount: n }) ?? void 0,
            isOrbExclusive: (0, s.Ab)(t),
        };
    },
    u = (e) => {
        let {
                hasSufficientOrbs: t,
                orbPrice: n,
                fiatPrice: a,
                isOrbExclusive: r,
                hasDiscountOffer: i = !1,
                prioritizedCurrency: l = null,
            } = e,
            s = [],
            d = l === o.Hi.ORBS,
            u = l === o.Hi.FIAT;
        null != n && null != a
            ? d || (!u && t && !i)
                ? s.push(n, a)
                : s.push(a, n)
            : null != n
              ? s.push(n)
              : null != a && s.push(a);
        let _ = s.length > 0 && s[0]?.currency === c.Yri.DISCORD_ORB;
        return { checkoutEligiblePrices: s, isOrbExclusive: r, hasSufficientOrbs: t, shouldCheckoutWithOrbs: _ };
    },
    _ = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            r = (0, a.r_)(),
            s = i.default.getCurrentUser(),
            {
                orbPrice: o,
                fiatPrice: c,
                isOrbExclusive: _,
            } = d({ product: t, hasShopDiscount: l.Ay.canUseShopDiscounts(s) }),
            p = null != o && null != r && r >= o.amount,
            { shouldCheckoutWithOrbs: m } = u({
                orbPrice: o,
                fiatPrice: c,
                isOrbExclusive: _,
                hasSufficientOrbs: p,
                prioritizedCurrency: n ?? null,
            });
        return m;
    };
function p(e) {
    let { product: t, hasShopDiscount: n, prioritizedCurrency: r, hasDiscountOffer: i = !1 } = e,
        { orbPrice: l, fiatPrice: s, isOrbExclusive: o } = d({ product: t, hasShopDiscount: n }),
        c = (0, a.kj)(null != l ? l.amount : null);
    return u({
        orbPrice: l,
        fiatPrice: s,
        isOrbExclusive: o,
        hasSufficientOrbs: c,
        hasDiscountOffer: i,
        prioritizedCurrency: r,
    });
}
