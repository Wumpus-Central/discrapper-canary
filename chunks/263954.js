t.d(r, { Z: () => i }), t(266796);
var n = t(200651);
t(192379);
var o = t(120356),
    s = t.n(o),
    c = t(640264);
function i(e) {
    let { icon: r, iconClassName: t, description: o, color: i } = e;
    return (0, n.jsxs)('div', {
        className: c.perkRow,
        children: [
            (0, n.jsx)('div', {
                className: c.perkIconContainer,
                children: (0, n.jsx)(r, {
                    color: null != i ? i : 'currentColor',
                    className: s()(c.perkIcon, t)
                })
            }),
            (0, n.jsx)('div', {
                className: c.perkDescription,
                children: o
            })
        ]
    });
}
