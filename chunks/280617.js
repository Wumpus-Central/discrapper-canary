a.d(t, { i: () => p });
var s = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    n = a(359459),
    o = a(137540),
    c = a(709808),
    d = a(464261),
    _ = a(818348),
    N = a(563853),
    A = a(900610);
let u = _.sE.MAIN_NAVIGATION_MENU;
function p(e) {
    let {
            className: t,
            TrackClick: a,
            onChangeLocale: r,
            avoidRouter: p,
            openNavAriaLabel: h,
            hideNavAriaLabel: I,
        } = e,
        k = l.useId(),
        [m, g] = l.useState(!1),
        T = l.useCallback(() => g(!m), [m]),
        O = l.useCallback(
            (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), m && T());
            },
            [m, T],
        );
    return (
        l.useEffect(() => (window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O)), [O]),
        (0, s.jsx)("header", {
            className: i()(A.header, t),
            children: (0, s.jsxs)("nav", {
                className: A.headerInner,
                children: [
                    (0, s.jsx)(a, {
                        tag: "div",
                        eventName: u,
                        className: A.headerLogo,
                        data: { linkClicked: "logo" },
                        children: (0, s.jsx)(o.A, {
                            avoidRouter: p,
                            className: A.logoWrapper,
                            to: _.Tk.INDEX,
                            from: _.sE.MAIN_NAVIGATION_MENU,
                            children: (0, s.jsx)("img", {
                                className: A.logo,
                                src: N.T.ASSET_LOGO_DISCORD_SVG,
                                alt: "Discord",
                                itemProp: "logo",
                            }),
                        }),
                    }),
                    (0, s.jsx)(a, {
                        tag: "div",
                        className: A.hamburgerButton,
                        eventName: u,
                        data: { linkClicked: "mobile-menu" },
                        children: (0, s.jsx)(n._, {
                            open: m,
                            "aria-haspopup": "true",
                            "aria-label": m ? I : h,
                            "aria-expanded": m,
                            "aria-controls": k,
                            onClick: T,
                        }),
                    }),
                    (0, s.jsxs)("ul", {
                        className: m ? A.headerNavOpen : A.headerNav,
                        children: [
                            (0, s.jsx)(d.C, { avoidRouter: p, TrackClick: a, styles: A, isMobile: !0, isVisible: m }),
                            (0, s.jsx)(c.B, { onChange: r }),
                        ],
                    }),
                ],
            }),
        })
    );
}
