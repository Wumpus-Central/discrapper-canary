n.d(t, { Z: () => T });
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
    f = n(638212),
    b = n(422034),
    x = n(206127),
    _ = n(710220),
    j = n(164662),
    C = n(123274),
    O = n(638631),
    E = n(645616),
    v = n(388032),
    S = n(5943);
let T = r.memo(
    r.forwardRef((e, t) => {
        let { className: n, subscriptionTier: r, isEligibleForBogoPromotion: s } = e,
            { analyticsLocations: T } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            N = (0, p.Nx)(),
            I = (0, x.$)(),
            y = (0, g.Z)(),
            A = null != y,
            P = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            { visibilityPercentageRef: R, visibilityPercentage: D } = (0, j.E)(!P),
            Z = (0, l.e7)([m.Z], () => m.Z.affinities),
            w = !A && Z.length > 0;
        return (0, i.jsx)(u.Gt, {
            value: T,
            children: (0, i.jsx)('div', {
                ref: t,
                className: a()(S.container, n),
                'data-testid': 'marketing-page-hero-header',
                children: (0, i.jsx)('div', {
                    ref: R,
                    children: (0, i.jsxs)('div', {
                        className: S.contentContainer,
                        children: [
                            (0, i.jsx)(E.Z, { containerVisibilityPercentage: D }),
                            N &&
                                (0, i.jsx)('div', {
                                    className: S.offerPillContainer,
                                    children: (0, i.jsx)(O.Z, { enablePremiumBrandRefresh: !0 })
                                }),
                            (0, i.jsx)('div', {
                                className: S.marketingPageTextContainer,
                                children: (0, i.jsx)(C.Z, { children: v.intl.string(v.t['EW+VIS']) })
                            }),
                            (0, i.jsxs)('div', {
                                className: S.body,
                                children: [
                                    A &&
                                        (0, i.jsx)('div', {
                                            className: S.referrerAttributionContainer,
                                            children: (0, i.jsx)(_.Z, {
                                                referrer: y,
                                                enablePremiumBrandRefresh: !0
                                            })
                                        }),
                                    w &&
                                        (0, i.jsx)('div', {
                                            className: S.affinitiesContainer,
                                            children: (0, i.jsx)(b.Z, {
                                                textColor: 'text-primary',
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0
                                            })
                                        }),
                                    (0, i.jsxs)('div', {
                                        className: N ? S.singleButtonContainer : S.twoButtonContainer,
                                        children: [
                                            (0, i.jsx)(f.Z, {
                                                size: 'md',
                                                fullWidth: N,
                                                hasActivePromotion: !!s,
                                                subscriptionTier: r
                                            }),
                                            !N &&
                                                (0, i.jsx)(h.Z, {
                                                    variant: 'secondary',
                                                    size: 'md'
                                                })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: S.descriptionContainer,
                                        children: (0, i.jsx)(o.Text, {
                                            color: 'text-tertiary',
                                            variant: 'text-xs/medium',
                                            children: v.intl.format(v.t.kt9wxs, { cheapestMonthlyPrice: I })
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
