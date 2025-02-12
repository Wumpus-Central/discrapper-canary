s.d(r, { Z: () => a });
var t = s(200651);
s(192379);
var n = s(120356),
    o = s.n(n),
    i = s(868081);
function a(e) {
    let { icon: r, iconClassName: s, description: n, color: a } = e;
    return (0, t.jsxs)('div', {
        className: i.perkRow,
        children: [
            (0, t.jsx)('div', {
                className: i.perkIconContainer,
                children: (0, t.jsx)(r, {
                    color: null != a ? a : 'currentColor',
                    className: o()(i.perkIcon, s)
                })
            }),
            (0, t.jsx)('div', {
                className: i.perkDescription,
                children: n
            })
        ]
    });
}
