n.d(t, { Z: () => v });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(357355),
    m = n(51574),
    p = n(105759),
    g = n(117791),
    h = n(740594),
    f = n(422034),
    b = n(206127),
    x = n(710220),
    _ = n(306066),
    j = n(123274),
    E = n(258033),
    O = n(388032),
    C = n(5943);
let v = r.forwardRef((e, t) => {
    let { className: n } = e,
        { analyticsLocations: r } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
        s = (0, m.ZP)({ location: 'PremiumMarketingHeroHeading' }),
        v = (0, m.J1)(s),
        S = (0, b.$)(),
        T = (0, p.Z)(),
        N = null != T,
        I = (0, l.e7)([u.Z], () => u.Z.affinities),
        y = !N && I.length > 0;
    return (0, i.jsx)(d.Gt, {
        value: r,
        children: (0, i.jsxs)('div', {
            ref: t,
            className: a()(C.container, n),
            'data-testid': 'marketing-page-hero-header',
            children: [
                (0, i.jsx)(_.Z, { className: C.gradientBackground }),
                (0, i.jsxs)('div', {
                    className: C.contentContainer,
                    children: [
                        (0, i.jsx)(E.Z, {}),
                        (0, i.jsx)('div', {
                            className: C.marketingPageTextContainer,
                            children: (0, i.jsx)(j.Z, { children: v })
                        }),
                        N &&
                            (0, i.jsx)('div', {
                                className: C.referrerAttributionContainer,
                                children: (0, i.jsx)(x.Z, {
                                    referrer: T,
                                    enablePremiumBrandRefresh: !0
                                })
                            }),
                        y &&
                            (0, i.jsx)('div', {
                                className: C.affinitiesContainer,
                                children: (0, i.jsx)(f.Z, {
                                    textColor: 'text-primary',
                                    smallerText: !1,
                                    isApplicationHome: !0,
                                    enablePremiumBrandRefresh: !0
                                })
                            }),
                        (0, i.jsxs)('div', {
                            className: C.buttonContainer,
                            children: [
                                (0, i.jsx)(h.Z, {
                                    variant: 'expressive',
                                    size: 'md'
                                }),
                                (0, i.jsx)(g.Z, {
                                    variant: 'secondary',
                                    size: 'md'
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'text-tertiary',
                            variant: 'text-xs/medium',
                            children: O.intl.format(O.t.kt9wxs, { cheapestMonthlyPrice: S })
                        })
                    ]
                })
            ]
        })
    });
});
