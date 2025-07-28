(n.d(t, { P: () => f }), n(35282));
var a = n(255367),
    i = n(120356),
    o = n.n(i),
    s = n(873546),
    r = n(481060),
    l = n(59662),
    c = n(829210),
    d = n(388032),
    u = n(476523);
function f(e) {
    let { tree: t, header: n, footer: i } = e,
        { showNavigationMobile: f } = (0, l.t)();
    return (0, a.jsxs)('div', {
        className: o()(u.sidebar, {
            [u.mobile]: s.tq,
            [u.mobileNavigationOpen]: f
        }),
        children: [
            null != n && (0, a.jsx)(n, {}),
            (0, a.jsx)(r.E1j, {
                placeholder: d.intl.string(d.t['5h0QOD']),
                query: '',
                onChange: () => {},
                size: r.E1j.Sizes.MEDIUM,
                className: u.search
            }),
            (0, a.jsx)(r.zJl, {
                className: u.navScroller,
                fade: !0,
                children: (0, a.jsx)('nav', {
                    className: u.nav,
                    children: (0, a.jsx)('ul', { children: t.root.data.layout.map((e) => (0, a.jsx)('li', { children: (0, a.jsx)(c.Z, { node: e }) }, e.key)) })
                })
            }),
            null != i &&
                (0, a.jsx)('footer', {
                    className: u.footer,
                    children: (0, a.jsx)(i, {})
                })
        ]
    });
}
