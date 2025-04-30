n.d(t, { Z: () => o }), n(953529);
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    s = n(640264);
function o(e) {
    let { icon: t, iconClassName: n, description: r, color: o } = e;
    return (0, l.jsxs)('div', {
        className: s.perkRow,
        children: [
            (0, l.jsx)('div', {
                className: s.perkIconContainer,
                children: (0, l.jsx)(t, {
                    color: null != o ? o : 'currentColor',
                    className: i()(s.perkIcon, n)
                })
            }),
            (0, l.jsx)('div', {
                className: s.perkDescription,
                children: r
            })
        ]
    });
}
