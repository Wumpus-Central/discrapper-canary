a.d(t, { i: () => h }), a(896048);
var s = a(627968),
    l = a(64700),
    r = a(503698),
    n = a.n(r),
    i = a(359459),
    o = a(137540),
    c = a(709808),
    d = a(464261),
    u = a(818348),
    N = a(563853),
    A = a(510057);
let p = u.sE.MAIN_NAVIGATION_MENU;
function h(e) {
    let {
            className: t,
            TrackClick: a,
            onChangeLocale: r,
            avoidRouter: h,
            openNavAriaLabel: b,
            hideNavAriaLabel: f,
        } = e,
        k = l.useId(),
        [I, O] = l.useState(!1),
        m = l.useCallback(() => O(!I), [I]),
        g = l.useCallback(
            (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), I && m());
            },
            [I, m],
        );
    return (
        l.useEffect(() => (window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g)), [g]),
        (0, s.jsx)("header", {
            className: n()(A.header, t),
            children: (0, s.jsxs)("nav", {
                className: A.headerInner,
                children: [
                    (0, s.jsx)(a, {
                        tag: "div",
                        eventName: p,
                        className: A.headerLogo,
                        data: { linkClicked: "logo" },
                        children: (0, s.jsx)(o.A, {
                            avoidRouter: h,
                            className: A.logoWrapper,
                            to: u.Tk.INDEX,
                            from: u.sE.MAIN_NAVIGATION_MENU,
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
                        eventName: p,
                        data: { linkClicked: "mobile-menu" },
                        children: (0, s.jsx)(i._, {
                            open: I,
                            "aria-haspopup": "true",
                            "aria-label": I ? f : b,
                            "aria-expanded": I,
                            "aria-controls": k,
                            onClick: m,
                        }),
                    }),
                    (0, s.jsxs)("ul", {
                        className: I ? A.headerNavOpen : A.headerNav,
                        children: [
                            (0, s.jsx)(d.C, {
                                avoidRouter: h,
                                TrackClick: a,
                                styles: A,
                                isMobile: !0,
                                isVisible: I,
                            }),
                            (0, s.jsx)(c.B, { onChange: r }),
                        ],
                    }),
                ],
            }),
        })
    );
}
