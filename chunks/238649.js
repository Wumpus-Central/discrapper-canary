n.d(t, { Z: () => v });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(140465),
    u = n(51574),
    m = n(105759),
    p = n(117791),
    g = n(740594),
    h = n(70466),
    f = n(206127),
    b = n(710220),
    x = n(306066),
    _ = n(123274),
    j = n(638631),
    E = n(258033),
    O = n(388032),
    C = n(5943);
let v = r.forwardRef((e, t) => {
    let { className: n, subscriptionTier: r, isEligibleForBogoPromotion: s } = e,
        { analyticsLocations: v } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        S = (0, u.ZP)({ location: 'PremiumMarketingHeroHeading' }),
        T = (0, u.J1)(S),
        N = (0, d.Nx)(),
        I = (0, f.$)(),
        { buttonText: y, marketingSubscriptionTierSkuId: A } = (0, h.G)({
            hasActivePromotion: !!s,
            subscriptionTier: r
        }),
        P = (0, m.Z)();
    return (0, i.jsx)(c.Gt, {
        value: v,
        children: (0, i.jsxs)('div', {
            ref: t,
            className: a()(C.container, n),
            'data-testid': 'marketing-page-hero-header',
            children: [
                (0, i.jsx)(x.Z, { className: C.gradientBackground }),
                (0, i.jsxs)('div', {
                    className: C.contentContainer,
                    children: [
                        (0, i.jsx)(E.Z, {}),
                        N &&
                            (0, i.jsx)('div', {
                                className: C.offerPillContainer,
                                children: (0, i.jsx)(j.Z, { enablePremiumBrandRefresh: !0 })
                            }),
                        (0, i.jsx)('div', {
                            className: C.marketingPageTextContainer,
                            children: (0, i.jsx)(_.Z, { children: T })
                        }),
                        null != P &&
                            (0, i.jsx)('div', {
                                className: C.referrerAttributionContainer,
                                children: (0, i.jsx)(b.Z, {
                                    referrer: P,
                                    enablePremiumBrandRefresh: !0
                                })
                            }),
                        (0, i.jsxs)('div', {
                            className: N ? C.singleButtonContainer : C.twoButtonContainer,
                            children: [
                                (0, i.jsx)(g.Z, {
                                    variant: 'expressive',
                                    size: 'md',
                                    fullWidth: N,
                                    text: y,
                                    subscriptionTier: A
                                }),
                                !N &&
                                    (0, i.jsx)(p.Z, {
                                        variant: 'secondary',
                                        size: 'md'
                                    })
                            ]
                        }),
                        (0, i.jsx)(l.Text, {
                            color: 'text-tertiary',
                            variant: 'text-xs/medium',
                            children: O.intl.format(O.t.kt9wxs, { cheapestMonthlyPrice: I })
                        })
                    ]
                })
            ]
        })
    });
});
