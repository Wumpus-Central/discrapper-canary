o.d(r, { Z: () => l }), o(953529);
var n = o(200651);
o(192379);
var t = o(120356),
    i = o.n(t),
    c = o(640264);
function l(e) {
    let { icon: r, iconClassName: o, description: t, color: l } = e;
    return (0, n.jsxs)('div', {
        className: c.perkRow,
        children: [
            (0, n.jsx)('div', {
                className: c.perkIconContainer,
                children: (0, n.jsx)(r, {
                    color: null != l ? l : 'currentColor',
                    className: i()(c.perkIcon, o)
                })
            }),
            (0, n.jsx)('div', {
                className: c.perkDescription,
                children: t
            })
        ]
    });
}
