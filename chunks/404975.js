n.d(t, { P: () => d });
var i = n(951288),
    l = n(120356),
    r = n.n(l),
    o = n(873546),
    s = n(481060),
    a = n(59662),
    u = n(829210),
    c = n(845435);
function d(e) {
    let { root: t, header: n, footer: l } = e,
        { showNavigationMobile: u } = (0, a.t)();
    return (0, i.jsxs)("div", {
        className: r()(c.sidebar, {
            [c.mobile]: o.tq,
            [c.mobileNavigationOpen]: u,
        }),
        children: [
            null != n && (0, i.jsx)(n, {}),
            (0, i.jsx)(s.zJl, {
                className: c.navScroller,
                fade: !0,
                children: (0, i.jsx)("nav", {
                    className: c.nav,
                    children: t.layout.map((e) => (0, i.jsx)(f, { section: e }, e.key)),
                }),
            }),
            null != l &&
                (0, i.jsx)("footer", {
                    className: c.footer,
                    children: (0, i.jsx)(l, {}),
                }),
        ],
    });
}
function f(e) {
    var t;
    let { section: n } = e,
        l = null == (t = n.useTitle) ? void 0 : t.call(n);
    return (0, i.jsxs)("ul", {
        className: c.section,
        children: [
            null != l &&
                (0, i.jsx)(s.X6q, {
                    className: c.label,
                    variant: "heading-sm/medium",
                    color: "text-tertiary",
                    children: l,
                }),
            n.layout.map((e) => (0, i.jsx)("li", { children: (0, i.jsx)(u.Z, { node: e }) }, e.key)),
        ],
    });
}
