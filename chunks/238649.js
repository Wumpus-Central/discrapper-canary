n.d(t, { Z: () => E });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(51574),
    u = n(105759),
    m = n(117791),
    p = n(740594),
    g = n(206127),
    h = n(710220),
    f = n(306066),
    b = n(123274),
    x = n(258033),
    _ = n(388032),
    j = n(5943);
let E = r.forwardRef((e, t) => {
    let { className: n } = e,
        { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        s = (0, d.ZP)({ location: 'PremiumMarketingHeroHeading' }),
        E = (0, d.J1)(s),
        O = (0, g.$)(),
        C = (0, u.Z)();
    return (0, i.jsx)(c.Gt, {
        value: r,
        children: (0, i.jsxs)('div', {
            ref: t,
            className: a()(j.container, n),
            'data-testid': 'marketing-page-hero-header',
            children: [
                (0, i.jsx)(f.Z, { className: j.gradientBackground }),
                (0, i.jsxs)('div', {
                    className: j.contentContainer,
                    children: [
                        (0, i.jsx)(x.Z, {}),
                        (0, i.jsx)('div', {
                            className: j.marketingPageTextContainer,
                            children: (0, i.jsx)(b.Z, { children: E })
                        }),
                        null != C &&
                            (0, i.jsx)('div', {
                                className: j.referrerAttributionContainer,
                                children: (0, i.jsx)(h.Z, {
                                    referrer: C,
                                    enablePremiumBrandRefresh: !0
                                })
                            }),
                        (0, i.jsxs)('div', {
                            className: j.buttonContainer,
                            children: [
                                (0, i.jsx)(p.Z, {
                                    variant: 'expressive',
                                    size: 'md'
                                }),
                                (0, i.jsx)(m.Z, {
                                    variant: 'secondary',
                                    size: 'md'
                                })
                            ]
                        }),
                        (0, i.jsx)(l.Text, {
                            color: 'text-tertiary',
                            variant: 'text-xs/medium',
                            children: _.intl.format(_.t.kt9wxs, { cheapestMonthlyPrice: O })
                        })
                    ]
                })
            ]
        })
    });
});
