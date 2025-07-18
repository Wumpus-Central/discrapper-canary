n.d(t, { Z: () => y });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(100527),
    u = n(906732),
    m = n(357355),
    p = n(140465),
    g = n(51574),
    h = n(105759),
    f = n(117791),
    b = n(740594),
    x = n(70466),
    _ = n(422034),
    j = n(206127),
    E = n(710220),
    O = n(164662),
    C = n(306066),
    v = n(123274),
    S = n(638631),
    T = n(258033),
    N = n(388032),
    I = n(5943);
let y = r.memo(
    r.forwardRef((e, t) => {
        let { className: n, subscriptionTier: r, isEligibleForBogoPromotion: s } = e,
            { analyticsLocations: y } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            A = (0, g.ZP)({ location: 'PremiumMarketingHeroHeading' }),
            P = (0, g.J1)(A),
            R = (0, p.Nx)(),
            D = (0, j.$)(),
            { buttonText: Z, marketingSubscriptionTierSkuId: w } = (0, x.G)({
                hasActivePromotion: !!s,
                subscriptionTier: r
            }),
            k = (0, h.Z)(),
            L = null != k,
            B = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: M, visibilityPercentage: U } = (0, O.E)(!B),
            V = (0, l.e7)([m.Z], () => m.Z.affinities),
            G = !L && V.length > 0;
        return (0, i.jsx)(u.Gt, {
            value: y,
            children: (0, i.jsxs)('div', {
                ref: t,
                className: a()(I.container, n),
                'data-testid': 'marketing-page-hero-header',
                children: [
                    (0, i.jsx)(C.Z, { className: I.gradientBackground }),
                    (0, i.jsx)('div', {
                        ref: M,
                        children: (0, i.jsxs)('div', {
                            className: I.contentContainer,
                            children: [
                                (0, i.jsx)(T.Z, { containerVisibilityPercentage: U }),
                                R &&
                                    (0, i.jsx)('div', {
                                        className: I.offerPillContainer,
                                        children: (0, i.jsx)(S.Z, { enablePremiumBrandRefresh: !0 })
                                    }),
                                (0, i.jsx)('div', {
                                    className: I.marketingPageTextContainer,
                                    children: (0, i.jsx)(v.Z, { children: P })
                                }),
                                L &&
                                    (0, i.jsx)('div', {
                                        className: I.referrerAttributionContainer,
                                        children: (0, i.jsx)(E.Z, {
                                            referrer: k,
                                            enablePremiumBrandRefresh: !0
                                        })
                                    }),
                                G &&
                                    (0, i.jsx)('div', {
                                        className: I.affinitiesContainer,
                                        children: (0, i.jsx)(_.Z, {
                                            textColor: 'text-primary',
                                            smallerText: !1,
                                            isApplicationHome: !0,
                                            enablePremiumBrandRefresh: !0
                                        })
                                    }),
                                (0, i.jsxs)('div', {
                                    className: R ? I.singleButtonContainer : I.twoButtonContainer,
                                    children: [
                                        (0, i.jsx)(b.Z, {
                                            variant: 'expressive',
                                            size: 'md',
                                            fullWidth: R,
                                            buttonTextOverride: Z,
                                            subscriptionTier: w
                                        }),
                                        !R &&
                                            (0, i.jsx)(f.Z, {
                                                variant: 'secondary',
                                                size: 'md'
                                            })
                                    ]
                                }),
                                (0, i.jsx)(o.Text, {
                                    color: 'text-tertiary',
                                    variant: 'text-xs/medium',
                                    children: N.intl.format(N.t.kt9wxs, { cheapestMonthlyPrice: D })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    })
);
