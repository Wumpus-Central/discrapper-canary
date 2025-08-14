n.d(t, { P: () => f }), n(35282);
var i = n(255367),
    l = n(120356),
    s = n.n(l),
    o = n(873546),
    r = n(481060),
    a = n(59662),
    u = n(829210),
    c = n(388032),
    d = n(845435);
function f(e) {
    let { root: t, header: n, footer: l } = e,
        { showNavigationMobile: f } = (0, a.t)();
    return (0, i.jsxs)("div", {
        className: s()(d.sidebar, {
            [d.mobile]: o.tq,
            [d.mobileNavigationOpen]: f,
        }),
        children: [
            null != n && (0, i.jsx)(n, {}),
            (0, i.jsx)(r.E1j, {
                placeholder: c.intl.string(c.t["5h0QOD"]),
                query: "",
                onChange: () => {},
                className: d.search,
            }),
            (0, i.jsx)(r.zJl, {
                className: d.navScroller,
                fade: !0,
                children: (0, i.jsx)("nav", {
                    className: d.nav,
                    children: (0, i.jsx)("ul", {
                        children: t.layout.map((e) =>
                            (0, i.jsx)("li", { children: (0, i.jsx)(u.Z, { node: e }) }, e.key),
                        ),
                    }),
                }),
            }),
            null != l &&
                (0, i.jsx)("footer", {
                    className: d.footer,
                    children: (0, i.jsx)(l, {}),
                }),
        ],
    });
}
