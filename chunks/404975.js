n.d(t, { P: () => f }), n(35282);
var i = n(255367),
    o = n(120356),
    l = n.n(o),
    r = n(873546),
    a = n(481060),
    s = n(59662),
    c = n(829210),
    u = n(388032),
    d = n(476523);
function f(e) {
    let { root: t, header: n, footer: o } = e,
        { showNavigationMobile: f } = (0, s.t)();
    return (0, i.jsxs)("div", {
        className: l()(d.sidebar, {
            [d.mobile]: r.tq,
            [d.mobileNavigationOpen]: f,
        }),
        children: [
            null != n && (0, i.jsx)(n, {}),
            (0, i.jsx)(a.E1j, {
                placeholder: u.intl.string(u.t["5h0QOD"]),
                query: "",
                onChange: () => {},
                className: d.search,
            }),
            (0, i.jsx)(a.zJl, {
                className: d.navScroller,
                fade: !0,
                children: (0, i.jsx)("nav", {
                    className: d.nav,
                    children: (0, i.jsx)("ul", {
                        children: t.layout.map((e) =>
                            (0, i.jsx)("li", { children: (0, i.jsx)(c.Z, { node: e }) }, e.key),
                        ),
                    }),
                }),
            }),
            null != o &&
                (0, i.jsx)("footer", {
                    className: d.footer,
                    children: (0, i.jsx)(o, {}),
                }),
        ],
    });
}
