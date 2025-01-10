n.d(r, {
    Z: function () {
        return a;
    }
});
var l = n(200651);
n(192379);
var t = n(120356),
    o = n.n(t),
    s = n(775475);
function a(e) {
    let { icon: r, iconClassName: n, description: t, color: a } = e;
    return (0, l.jsxs)('div', {
        className: s.perkRow,
        children: [
            (0, l.jsx)('div', {
                className: s.perkIconContainer,
                children: (0, l.jsx)(r, {
                    color: null != a ? a : 'currentColor',
                    className: o()(s.perkIcon, n)
                })
            }),
            (0, l.jsx)('div', {
                className: s.perkDescription,
                children: t
            })
        ]
    });
}
