t.d(n, {
    Z: function () {
        return a;
    }
});
var o = t(200651);
t(192379);
var l = t(120356),
    i = t.n(l),
    r = t(145577);
function a(e) {
    let { icon: n, iconClassName: t, description: l, color: a } = e;
    return (0, o.jsxs)('div', {
        className: r.perkRow,
        children: [
            (0, o.jsx)('div', {
                className: r.perkIconContainer,
                children: (0, o.jsx)(n, {
                    color: null != a ? a : 'currentColor',
                    className: i()(r.perkIcon, t)
                })
            }),
            (0, o.jsx)('div', {
                className: r.perkDescription,
                children: l
            })
        ]
    });
}
