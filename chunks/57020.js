n.d(t, {
    Ak: () => _,
    FI: () => h,
}),
    n(321073);
var r = n(855104),
    i = n(151252),
    a = n(287809),
    s = n(927578),
    o = n(623373),
    l = n(561769),
    c = n(758836),
    u = n(652215);
let d = (e) => {
        var t;
        let { product: n, isPremiumUser: r } = e,
            { enabled: a } = (0, i.m)({ location: "getShopBasePricingData" }),
            s = a
                ? (0, o.CW)({
                      product: n,
                      isPremiumUser: r,
                  })
                : void 0;
        return {
            orbPrice: s,
            fiatPrice:
                null !=
                (t = (0, o.$K)({
                    product: n,
                    isPremiumUser: r,
                }))
                    ? t
                    : void 0,
            isOrbExclusive: !!a && (0, o.Ab)(n),
        };
    },
    f = (e) => {
        var t;
        let {
                hasSufficientOrbs: n,
                orbPrice: r,
                fiatPrice: i,
                isOrbExclusive: a,
                hasDiscountOffer: s = !1,
                prioritizedCurrency: o = null,
            } = e,
            c = [],
            d = o === l.Hi.ORBS;
        null != r && null != i
            ? d || (n && !s)
                ? c.push(r, i)
                : c.push(i, r)
            : null != r
              ? c.push(r)
              : null != i && c.push(i);
        let f = c.length > 0 && (null == (t = c[0]) ? void 0 : t.currency) === u.Yri.DISCORD_ORB;
        return {
            checkoutEligiblePrices: c,
            isOrbExclusive: a,
            hasSufficientOrbs: n,
            shouldCheckoutWithOrbs: f,
        };
    },
    p = () => ({
        orbPrice: c.nE,
        fiatPrice: void 0,
        isOrbExclusive: !0,
    }),
    _ = (e) => {
        let { product: t } = e,
            n = (0, r.r_)(),
            i = a.default.getCurrentUser(),
            {
                orbPrice: o,
                fiatPrice: l,
                isOrbExclusive: c,
            } = d({
                product: t,
                isPremiumUser: s.Ay.canUseCollectibles(i),
            }),
            u = null != o && null != n && n >= o.amount,
            { shouldCheckoutWithOrbs: p } = f({
                orbPrice: o,
                fiatPrice: l,
                isOrbExclusive: c,
                hasSufficientOrbs: u,
            });
        return p;
    };
function h(e) {
    let { product: t, isPremiumUser: n, prioritizedCurrency: i, hasDiscountOffer: a = !1, isRental: s = !1 } = e,
        {
            orbPrice: o,
            fiatPrice: l,
            isOrbExclusive: c,
        } = s
            ? p()
            : d({
                  product: t,
                  isPremiumUser: n,
              }),
        u = (0, r.kj)(null != o ? o.amount : null);
    return f({
        orbPrice: o,
        fiatPrice: l,
        isOrbExclusive: c,
        hasSufficientOrbs: u,
        hasDiscountOffer: a,
        prioritizedCurrency: i,
    });
}
