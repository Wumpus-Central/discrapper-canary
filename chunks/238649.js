n.d(t, { Z: () => N });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(100527),
    u = n(906732),
    m = n(140465),
    p = n(51574),
    g = n(105759),
    h = n(117791),
    f = n(740594),
    b = n(70466),
    x = n(206127),
    _ = n(710220),
    j = n(164662),
    E = n(306066),
    O = n(123274),
    C = n(638631),
    v = n(258033),
    S = n(388032),
    T = n(5943);
let N = r.memo(
    r.forwardRef((e, t) => {
        let { className: n, subscriptionTier: r, isEligibleForBogoPromotion: s } = e,
            { analyticsLocations: N } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            I = (0, p.ZP)({ location: 'PremiumMarketingHeroHeading' }),
            y = (0, p.J1)(I),
            A = (0, m.Nx)(),
            P = (0, x.$)(),
            { buttonText: R, marketingSubscriptionTierSkuId: D } = (0, b.G)({
                hasActivePromotion: !!s,
                subscriptionTier: r
            }),
            Z = (0, g.Z)(),
            w = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: k, visibilityPercentage: L } = (0, j.E)(!w);
        return (0, i.jsx)(u.Gt, {
            value: N,
            children: (0, i.jsxs)('div', {
                ref: t,
                className: a()(T.container, n),
                'data-testid': 'marketing-page-hero-header',
                children: [
                    (0, i.jsx)(E.Z, { className: T.gradientBackground }),
                    (0, i.jsx)('div', {
                        ref: k,
                        children: (0, i.jsxs)('div', {
                            className: T.contentContainer,
                            children: [
                                (0, i.jsx)(v.Z, { containerVisibilityPercentage: L }),
                                A &&
                                    (0, i.jsx)('div', {
                                        className: T.offerPillContainer,
                                        children: (0, i.jsx)(C.Z, { enablePremiumBrandRefresh: !0 })
                                    }),
                                (0, i.jsx)('div', {
                                    className: T.marketingPageTextContainer,
                                    children: (0, i.jsx)(O.Z, { children: y })
                                }),
                                null != Z &&
                                    (0, i.jsx)('div', {
                                        className: T.referrerAttributionContainer,
                                        children: (0, i.jsx)(_.Z, {
                                            referrer: Z,
                                            enablePremiumBrandRefresh: !0
                                        })
                                    }),
                                (0, i.jsxs)('div', {
                                    className: A ? T.singleButtonContainer : T.twoButtonContainer,
                                    children: [
                                        (0, i.jsx)(f.Z, {
                                            variant: 'expressive',
                                            size: 'md',
                                            fullWidth: A,
                                            buttonTextOverride: R,
                                            subscriptionTier: D
                                        }),
                                        !A &&
                                            (0, i.jsx)(h.Z, {
                                                variant: 'secondary',
                                                size: 'md'
                                            })
                                    ]
                                }),
                                (0, i.jsx)(o.Text, {
                                    color: 'text-tertiary',
                                    variant: 'text-xs/medium',
                                    children: S.intl.format(S.t.kt9wxs, { cheapestMonthlyPrice: P })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    })
);
