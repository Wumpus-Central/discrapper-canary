(n.d(t, { P: () => f }), n(35282));
var i = n(255367),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(481060),
    r = n(59662),
    c = n(829210),
    u = n(388032),
    d = n(476523);
function f(e) {
    let { tree: t, header: n, footer: a } = e,
        { showNavigationMobile: f } = (0, r.t)();
    return (0, i.jsxs)('div', {
        className: o()(d.sidebar, {
            [d.mobile]: s.tq,
            [d.mobileNavigationOpen]: f
        }),
        children: [
            null != n && (0, i.jsx)(n, {}),
            (0, i.jsx)(l.E1j, {
                placeholder: u.intl.string(u.t['5h0QOD']),
                query: '',
                onChange: () => {},
                className: d.search
            }),
            (0, i.jsx)(l.zJl, {
                className: d.navScroller,
                fade: !0,
                children: (0, i.jsx)('nav', {
                    className: d.nav,
                    children: (0, i.jsx)('ul', { children: t.root.data.layout.map((e) => (0, i.jsx)('li', { children: (0, i.jsx)(c.Z, { node: e }) }, e.key)) })
                })
            }),
            null != a &&
                (0, i.jsx)('footer', {
                    className: d.footer,
                    children: (0, i.jsx)(a, {})
                })
        ]
    });
}
