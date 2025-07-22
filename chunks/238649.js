n.d(t, { Z: () => I });
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
    C = n(123274),
    v = n(638631),
    S = n(258033),
    T = n(388032),
    N = n(5943);
let I = r.memo(
    r.forwardRef((e, t) => {
        let { className: n, subscriptionTier: r, isEligibleForBogoPromotion: s } = e,
            { analyticsLocations: I } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            y = (0, g.ZP)({ location: 'PremiumMarketingHeroHeading' }),
            A = (0, g.J1)(y),
            P = (0, p.Nx)(),
            R = (0, j.$)(),
            { buttonText: D, marketingSubscriptionTierSkuId: Z } = (0, x.G)({
                hasActivePromotion: !!s,
                subscriptionTier: r
            }),
            w = (0, h.Z)(),
            k = null != w,
            L = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: B, visibilityPercentage: M } = (0, O.E)(!L),
            U = (0, l.e7)([m.Z], () => m.Z.affinities),
            V = !k && U.length > 0;
        return (0, i.jsx)(u.Gt, {
            value: I,
            children: (0, i.jsx)('div', {
                ref: t,
                className: a()(N.container, n),
                'data-testid': 'marketing-page-hero-header',
                children: (0, i.jsx)('div', {
                    ref: B,
                    children: (0, i.jsxs)('div', {
                        className: N.contentContainer,
                        children: [
                            (0, i.jsx)(S.Z, { containerVisibilityPercentage: M }),
                            P &&
                                (0, i.jsx)('div', {
                                    className: N.offerPillContainer,
                                    children: (0, i.jsx)(v.Z, { enablePremiumBrandRefresh: !0 })
                                }),
                            (0, i.jsx)('div', {
                                className: N.marketingPageTextContainer,
                                children: (0, i.jsx)(C.Z, { children: A })
                            }),
                            k &&
                                (0, i.jsx)('div', {
                                    className: N.referrerAttributionContainer,
                                    children: (0, i.jsx)(E.Z, {
                                        referrer: w,
                                        enablePremiumBrandRefresh: !0
                                    })
                                }),
                            V &&
                                (0, i.jsx)('div', {
                                    className: N.affinitiesContainer,
                                    children: (0, i.jsx)(_.Z, {
                                        textColor: 'text-primary',
                                        smallerText: !1,
                                        isApplicationHome: !0,
                                        enablePremiumBrandRefresh: !0
                                    })
                                }),
                            (0, i.jsxs)('div', {
                                className: P ? N.singleButtonContainer : N.twoButtonContainer,
                                children: [
                                    (0, i.jsx)(b.Z, {
                                        variant: 'expressive',
                                        size: 'md',
                                        fullWidth: P,
                                        buttonTextOverride: D,
                                        subscriptionTier: Z
                                    }),
                                    !P &&
                                        (0, i.jsx)(f.Z, {
                                            variant: 'secondary',
                                            size: 'md'
                                        })
                                ]
                            }),
                            (0, i.jsx)(o.Text, {
                                color: 'text-tertiary',
                                variant: 'text-xs/medium',
                                children: T.intl.format(T.t.kt9wxs, { cheapestMonthlyPrice: R })
                            })
                        ]
                    })
                })
            })
        });
    })
);
