i.d(t, {
    Ak: () => m,
    FI: () => g,
}),
    i(321073);
var n = i(855104),
    r = i(151252),
    l = i(287809),
    s = i(927578),
    o = i(623373),
    a = i(561769),
    c = i(758836),
    u = i(652215);
let d = (e) => {
        var t;
        let { product: i, isPremiumUser: n } = e,
            { enabled: l } = (0, r.m)({
                location: "getShopBasePricingData",
            }),
            s = l
                ? (0, o.CW)({
                      product: i,
                      isPremiumUser: n,
                  })
                : void 0;
        return {
            orbPrice: s,
            fiatPrice:
                null !=
                (t = (0, o.$K)({
                    product: i,
                    isPremiumUser: n,
                }))
                    ? t
                    : void 0,
            isOrbExclusive: !!l && (0, o.Ab)(i),
        };
    },
    p = (e) => {
        var t;
        let {
                hasSufficientOrbs: i,
                orbPrice: n,
                fiatPrice: r,
                isOrbExclusive: l,
                hasDiscountOffer: s = !1,
                prioritizedCurrency: o = null,
            } = e,
            c = [],
            d = o === a.Hi.ORBS;
        null != n && null != r
            ? d || (i && !s)
                ? c.push(n, r)
                : c.push(r, n)
            : null != n
              ? c.push(n)
              : null != r && c.push(r);
        let p = c.length > 0 && (null == (t = c[0]) ? void 0 : t.currency) === u.Yri.DISCORD_ORB;
        return {
            checkoutEligiblePrices: c,
            isOrbExclusive: l,
            hasSufficientOrbs: i,
            shouldCheckoutWithOrbs: p,
        };
    },
    m = (e) => {
        let { product: t } = e,
            i = (0, n.r_)(),
            r = l.default.getCurrentUser(),
            {
                orbPrice: o,
                fiatPrice: a,
                isOrbExclusive: c,
            } = d({
                product: t,
                isPremiumUser: s.Ay.canUseCollectibles(r),
            }),
            u = null != o && null != i && i >= o.amount,
            { shouldCheckoutWithOrbs: m } = p({
                orbPrice: o,
                fiatPrice: a,
                isOrbExclusive: c,
                hasSufficientOrbs: u,
            });
        return m;
    };

function g(e) {
    let { product: t, isPremiumUser: i, prioritizedCurrency: r, hasDiscountOffer: l = !1, isRental: s = !1 } = e,
        {
            orbPrice: o,
            fiatPrice: a,
            isOrbExclusive: u,
        } = s
            ? {
                  orbPrice: c.nE,
                  fiatPrice: void 0,
                  isOrbExclusive: !0,
              }
            : d({
                  product: t,
                  isPremiumUser: i,
              }),
        m = (0, n.kj)(null != o ? o.amount : null);
    return p({
        orbPrice: o,
        fiatPrice: a,
        isOrbExclusive: u,
        hasSufficientOrbs: m,
        hasDiscountOffer: l,
        prioritizedCurrency: r,
    });
}
