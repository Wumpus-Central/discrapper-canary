(n.d(t, { P: () => l }), n(35282));
var a = n(255367),
    i = n(481060),
    r = n(829210),
    s = n(388032),
    o = n(476523);
function l(e) {
    let { tree: t, header: n, footer: l } = e;
    return (0, a.jsxs)('div', {
        className: o.sidebar,
        children: [
            null != n && (0, a.jsx)(n, {}),
            (0, a.jsx)(i.E1j, {
                placeholder: s.intl.string(s.t['5h0QOD']),
                query: '',
                onChange: () => {},
                size: i.E1j.Sizes.MEDIUM,
                className: o.search
            }),
            (0, a.jsx)(i.zJl, {
                className: o.navScroller,
                fade: !0,
                children: (0, a.jsx)('nav', {
                    className: o.nav,
                    children: (0, a.jsx)('ul', { children: t.root.data.layout.map((e) => (0, a.jsx)('li', { children: (0, a.jsx)(r.Z, { node: e }) }, e.key)) })
                })
            }),
            null != l &&
                (0, a.jsx)('footer', {
                    className: o.footer,
                    children: (0, a.jsx)(l, {})
                })
        ]
    });
}
