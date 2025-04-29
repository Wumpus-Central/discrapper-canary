a.d(t, { D: () => p }), a(388685);
var n = a(255367),
    r = a(73800),
    s = a(120356),
    l = a.n(s),
    i = a(608863),
    o = a(66037),
    c = a(643103),
    d = a(34211),
    u = a(231338),
    _ = a(431138),
    N = a(35289);
let m = u.j_.MAIN_NAVIGATION_MENU;
function p(e) {
    let { className: t, TrackClick: a, onChangeLocale: s, avoidRouter: p, openNavAriaLabel: h, hideNavAriaLabel: I } = e,
        k = r.useId(),
        [g, A] = r.useState(!1),
        O = r.useCallback(() => A(!g), [g]),
        f = r.useCallback(
            (e) => {
                ('Escape' === e.key || 'Esc' === e.key) && (e.preventDefault(), g && O());
            },
            [g, O]
        );
    return (
        r.useEffect(() => (window.addEventListener('keydown', f), () => window.removeEventListener('keydown', f)), [f]),
        (0, n.jsx)('header', {
            className: l()(N.header, t),
            children: (0, n.jsxs)('nav', {
                className: N.headerInner,
                children: [
                    (0, n.jsx)(a, {
                        tag: 'div',
                        eventName: m,
                        className: N.headerLogo,
                        data: { linkClicked: 'logo' },
                        children: (0, n.jsx)(o.Z, {
                            avoidRouter: p,
                            className: N.logoWrapper,
                            to: u.am.INDEX,
                            from: u.j_.MAIN_NAVIGATION_MENU,
                            children: (0, n.jsx)('img', {
                                className: N.logo,
                                src: _.r.ASSET_LOGO_DISCORD_SVG,
                                alt: 'Discord',
                                itemProp: 'logo'
                            })
                        })
                    }),
                    (0, n.jsx)(a, {
                        tag: 'div',
                        className: N.hamburgerButton,
                        eventName: m,
                        data: { linkClicked: 'mobile-menu' },
                        children: (0, n.jsx)(i.r, {
                            open: g,
                            'aria-haspopup': 'true',
                            'aria-label': g ? I : h,
                            'aria-expanded': g,
                            'aria-controls': k,
                            onClick: O
                        })
                    }),
                    (0, n.jsxs)('ul', {
                        className: g ? N.headerNavOpen : N.headerNav,
                        children: [
                            (0, n.jsx)(d.o, {
                                avoidRouter: p,
                                TrackClick: a,
                                styles: N,
                                isMobile: !0,
                                isVisible: g
                            }),
                            (0, n.jsx)(c.p, { onChange: s })
                        ]
                    })
                ]
            })
        })
    );
}
