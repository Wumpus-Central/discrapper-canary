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
    m = n(357355),
    p = n(140465),
    g = n(105759),
    h = n(117791),
    f = n(740594),
    b = n(70466),
    x = n(422034),
    _ = n(206127),
    j = n(710220),
    E = n(164662),
    O = n(123274),
    C = n(638631),
    v = n(258033),
    S = n(388032),
    T = n(5943);
let N = r.memo(
    r.forwardRef((e, t) => {
        let { className: n, subscriptionTier: r, isEligibleForBogoPromotion: s } = e,
            { analyticsLocations: N } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            I = (0, p.Nx)(),
            y = (0, _.$)(),
            { buttonText: A, marketingSubscriptionTierSkuId: P } = (0, b.G)({
                hasActivePromotion: !!s,
                subscriptionTier: r
            }),
            R = (0, g.Z)(),
            D = null != R,
            Z = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: w, visibilityPercentage: k } = (0, E.E)(!Z),
            L = (0, l.e7)([m.Z], () => m.Z.affinities),
            B = !D && L.length > 0;
        return (0, i.jsx)(u.Gt, {
            value: N,
            children: (0, i.jsx)('div', {
                ref: t,
                className: a()(T.container, n),
                'data-testid': 'marketing-page-hero-header',
                children: (0, i.jsx)('div', {
                    ref: w,
                    children: (0, i.jsxs)('div', {
                        className: T.contentContainer,
                        children: [
                            (0, i.jsx)(v.Z, { containerVisibilityPercentage: k }),
                            I &&
                                (0, i.jsx)('div', {
                                    className: T.offerPillContainer,
                                    children: (0, i.jsx)(C.Z, { enablePremiumBrandRefresh: !0 })
                                }),
                            (0, i.jsx)('div', {
                                className: T.marketingPageTextContainer,
                                children: (0, i.jsx)(O.Z, { children: S.intl.string(S.t['EW+VIS']) })
                            }),
                            (0, i.jsxs)('div', {
                                className: T.body,
                                children: [
                                    D &&
                                        (0, i.jsx)('div', {
                                            className: T.referrerAttributionContainer,
                                            children: (0, i.jsx)(j.Z, {
                                                referrer: R,
                                                enablePremiumBrandRefresh: !0
                                            })
                                        }),
                                    B &&
                                        (0, i.jsx)('div', {
                                            className: T.affinitiesContainer,
                                            children: (0, i.jsx)(x.Z, {
                                                textColor: 'text-primary',
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0
                                            })
                                        }),
                                    (0, i.jsxs)('div', {
                                        className: I ? T.singleButtonContainer : T.twoButtonContainer,
                                        children: [
                                            (0, i.jsx)(f.Z, {
                                                variant: 'expressive',
                                                size: 'md',
                                                fullWidth: I,
                                                buttonTextOverride: A,
                                                subscriptionTier: P
                                            }),
                                            !I &&
                                                (0, i.jsx)(h.Z, {
                                                    variant: 'secondary',
                                                    size: 'md'
                                                })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: T.descriptionContainer,
                                        children: (0, i.jsx)(o.Text, {
                                            color: 'text-tertiary',
                                            variant: 'text-xs/medium',
                                            children: S.intl.format(S.t.kt9wxs, { cheapestMonthlyPrice: y })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        });
    })
);
