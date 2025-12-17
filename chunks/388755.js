a.d(t, { D: () => p }), a(388685);
var n = a(54381),
    r = a(473749),
    s = a(120356),
    l = a.n(s),
    i = a(608863),
    o = a(66037),
    c = a(643103),
    d = a(34211),
    u = a(231338),
    N = a(431138),
    m = a(820014);
let f = u.j_.MAIN_NAVIGATION_MENU;
function p(e) {
    let {
            className: t,
            TrackClick: a,
            onChangeLocale: s,
            avoidRouter: p,
            openNavAriaLabel: h,
            hideNavAriaLabel: I,
        } = e,
        b = r.useId(),
        [k, g] = r.useState(!1),
        A = r.useCallback(() => g(!k), [k]),
        O = r.useCallback(
            (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), k && A());
            },
            [k, A],
        );
    return (
        r.useEffect(() => (window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O)), [O]),
        (0, n.jsx)("header", {
            className: l()(m.header, t),
            children: (0, n.jsxs)("nav", {
                className: m.headerInner,
                children: [
                    (0, n.jsx)(a, {
                        tag: "div",
                        eventName: f,
                        className: m.headerLogo,
                        data: { linkClicked: "logo" },
                        children: (0, n.jsx)(o.Z, {
                            avoidRouter: p,
                            className: m.logoWrapper,
                            to: u.am.INDEX,
                            from: u.j_.MAIN_NAVIGATION_MENU,
                            children: (0, n.jsx)("img", {
                                className: m.logo,
                                src: N.r.ASSET_LOGO_DISCORD_SVG,
                                alt: "Discord",
                                itemProp: "logo",
                            }),
                        }),
                    }),
                    (0, n.jsx)(a, {
                        tag: "div",
                        className: m.hamburgerButton,
                        eventName: f,
                        data: { linkClicked: "mobile-menu" },
                        children: (0, n.jsx)(i.r, {
                            open: k,
                            "aria-haspopup": "true",
                            "aria-label": k ? I : h,
                            "aria-expanded": k,
                            "aria-controls": b,
                            onClick: A,
                        }),
                    }),
                    (0, n.jsxs)("ul", {
                        className: k ? m.headerNavOpen : m.headerNav,
                        children: [
                            (0, n.jsx)(d.o, {
                                avoidRouter: p,
                                TrackClick: a,
                                styles: m,
                                isMobile: !0,
                                isVisible: k,
                            }),
                            (0, n.jsx)(c.p, { onChange: s }),
                        ],
                    }),
                ],
            }),
        })
    );
}
