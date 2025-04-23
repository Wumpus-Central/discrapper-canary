n.d(r, { Z: () => l }), n(953529);
var o = n(200651);
n(192379);
var t = n(120356),
    i = n.n(t),
    c = n(640264);
function l(e) {
    let { icon: r, iconClassName: n, description: t, color: l } = e;
    return (0, o.jsxs)('div', {
        className: c.perkRow,
        children: [
            (0, o.jsx)('div', {
                className: c.perkIconContainer,
                children: (0, o.jsx)(r, {
                    color: null != l ? l : 'currentColor',
                    className: i()(c.perkIcon, n)
                })
            }),
            (0, o.jsx)('div', {
                className: c.perkDescription,
                children: t
            })
        ]
    });
}
