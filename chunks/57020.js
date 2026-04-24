n.d(t, { A: () => h, F: () => _ }), n(321073);
var i = n(855104),
    l = n(270051),
    a = n(287809),
    s = n(927578),
    r = n(623373),
    o = n(561769),
    d = n(652215);
let c = (e) => {
        let { product: t, hasShopDiscount: n } = e,
            { enabled: i } = (0, l.m)({ location: "getShopBasePricingData" }),
            a = i ? (0, r.CW)({ product: t, hasShopDiscount: n }) : void 0;
        return {
            orbPrice: a,
            fiatPrice: (0, r.$K)({ product: t, hasShopDiscount: n }) ?? void 0,
            isOrbExclusive: (0, r.Ab)(t),
        };
    },
    u = (e) => {
        let {
                hasSufficientOrbs: t,
                orbPrice: n,
                fiatPrice: i,
                isOrbExclusive: l,
                hasDiscountOffer: a = !1,
                prioritizedCurrency: s = null,
            } = e,
            r = [],
            c = s === o.Hi.ORBS,
            u = s === o.Hi.FIAT;
        null != n && null != i
            ? c || (!u && t && !a)
                ? r.push(n, i)
                : r.push(i, n)
            : null != n
              ? r.push(n)
              : null != i && r.push(i);
        let h = r.length > 0 && r[0]?.currency === d.Yri.DISCORD_ORB;
        return { checkoutEligiblePrices: r, isOrbExclusive: l, hasSufficientOrbs: t, shouldCheckoutWithOrbs: h };
    },
    h = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            l = (0, i.r_)(),
            r = a.default.getCurrentUser(),
            {
                orbPrice: o,
                fiatPrice: d,
                isOrbExclusive: h,
            } = c({ product: t, hasShopDiscount: s.Ay.canUseShopDiscounts(r) }),
            _ = null != o && null != l && l >= o.amount,
            { shouldCheckoutWithOrbs: m } = u({
                orbPrice: o,
                fiatPrice: d,
                isOrbExclusive: h,
                hasSufficientOrbs: _,
                prioritizedCurrency: n ?? null,
            });
        return m;
    };
function _(e) {
    let { product: t, hasShopDiscount: n, prioritizedCurrency: l, hasDiscountOffer: a = !1 } = e,
        { orbPrice: s, fiatPrice: r, isOrbExclusive: o } = c({ product: t, hasShopDiscount: n }),
        d = (0, i.kj)(null != s ? s.amount : null);
    return u({
        orbPrice: s,
        fiatPrice: r,
        isOrbExclusive: o,
        hasSufficientOrbs: d,
        hasDiscountOffer: a,
        prioritizedCurrency: l,
    });
}
