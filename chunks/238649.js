n.d(t, { Z: () => _ });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(51574),
    u = n(117791),
    m = n(740594),
    p = n(206127),
    g = n(306066),
    h = n(123274),
    f = n(258033),
    b = n(388032),
    x = n(5943);
let _ = r.forwardRef((e, t) => {
    let { className: n } = e,
        { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        s = (0, d.ZP)({ location: 'PremiumMarketingHeroHeading' }),
        _ = (0, d.J1)(s),
        j = (0, p.$)();
    return (0, i.jsx)(c.Gt, {
        value: r,
        children: (0, i.jsxs)('div', {
            ref: t,
            className: a()(x.container, n),
            'data-testid': 'marketing-page-hero-header',
            children: [
                (0, i.jsx)(g.Z, { className: x.gradientBackground }),
                (0, i.jsxs)('div', {
                    className: x.contentContainer,
                    children: [
                        (0, i.jsx)(f.Z, {}),
                        (0, i.jsx)('div', {
                            className: x.marketingPageTextContainer,
                            children: (0, i.jsx)(h.Z, { children: _ })
                        }),
                        (0, i.jsxs)('div', {
                            className: x.buttonContainer,
                            children: [
                                (0, i.jsx)(m.Z, {
                                    variant: 'expressive',
                                    size: 'md'
                                }),
                                (0, i.jsx)(u.Z, {
                                    variant: 'secondary',
                                    size: 'md'
                                })
                            ]
                        }),
                        (0, i.jsx)(l.Text, {
                            color: 'text-tertiary',
                            variant: 'text-xs/medium',
                            children: b.intl.format(b.t.kt9wxs, { cheapestMonthlyPrice: j })
                        })
                    ]
                })
            ]
        })
    });
});
