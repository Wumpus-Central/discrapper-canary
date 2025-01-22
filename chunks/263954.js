t.d(r, {
    Z: function () {
        return i;
    }
});
var o = t(200651);
t(192379);
var n = t(120356),
    s = t.n(n),
    a = t(775475);
function i(e) {
    let { icon: r, iconClassName: t, description: n, color: i } = e;
    return (0, o.jsxs)('div', {
        className: a.perkRow,
        children: [
            (0, o.jsx)('div', {
                className: a.perkIconContainer,
                children: (0, o.jsx)(r, {
                    color: null != i ? i : 'currentColor',
                    className: s()(a.perkIcon, t)
                })
            }),
            (0, o.jsx)('div', {
                className: a.perkDescription,
                children: n
            })
        ]
    });
}
