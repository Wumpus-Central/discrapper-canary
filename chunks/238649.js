n.d(t, { Z: () => y });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(410030),
    d = n(607070),
    u = n(100527),
    m = n(906732),
    p = n(70097),
    g = n(526167),
    h = n(51574),
    f = n(117791),
    b = n(740594),
    x = n(206127),
    _ = n(258033),
    j = n(388032),
    E = n(5943),
    O = n(651323),
    C = n(130154),
    v = n(278712),
    S = n(768741),
    T = n(857998),
    N = n(193371);
let I = () => {
        let e,
            t = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
            n = (0, g.rO)(),
            r = (0, o.apv)((0, c.ZP)());
        if (t) {
            let e = r ? N.Z : v.Z;
            return (0, i.jsx)('div', {
                className: E.gradientBackground,
                children: (0, i.jsx)('img', {
                    src: e,
                    alt: ''
                })
            });
        }
        return (
            (e = n ? (r ? S.Z : O.Z) : r ? T.Z : C.Z),
            (0, i.jsx)('div', {
                className: E.gradientBackground,
                children: (0, i.jsx)(
                    p.Z,
                    {
                        muted: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        loop: !0,
                        children: (0, i.jsx)('source', { src: e })
                    },
                    e
                )
            })
        );
    },
    y = r.forwardRef((e, t) => {
        let { className: n } = e,
            { analyticsLocations: r } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            s = (0, h.ZP)({ location: 'PremiumMarketingHeroHeading' }),
            l = (0, h.J1)(s),
            c = (0, x.$)();
        return (0, i.jsx)(m.Gt, {
            value: r,
            children: (0, i.jsxs)('div', {
                ref: t,
                className: a()(E.container, n),
                'data-testid': 'marketing-page-hero-header',
                children: [
                    (0, i.jsx)(I, {}),
                    (0, i.jsxs)('div', {
                        className: E.contentContainer,
                        children: [
                            (0, i.jsx)(_.Z, {}),
                            (0, i.jsx)('div', {
                                className: E.marketingPageTextContainer,
                                children: (0, i.jsx)(o.X6q, {
                                    className: E.marketingPageHeading,
                                    variant: 'display-lg',
                                    color: 'header-primary',
                                    children: l
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: E.buttonContainer,
                                children: [
                                    (0, i.jsx)(b.Z, {
                                        variant: 'expressive',
                                        size: 'md'
                                    }),
                                    (0, i.jsx)(f.Z, {
                                        variant: 'secondary',
                                        size: 'md'
                                    })
                                ]
                            }),
                            (0, i.jsx)(o.Text, {
                                color: 'text-tertiary',
                                variant: 'text-xs/medium',
                                children: j.intl.format(j.t.kt9wxs, { cheapestMonthlyPrice: c })
                            })
                        ]
                    })
                ]
            })
        });
    });
