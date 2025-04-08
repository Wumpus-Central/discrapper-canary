n.d(t, { Z: () => o }), n(953529);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(640264);
function o(e) {
    let { icon: t, iconClassName: n, description: l, color: o } = e;
    return (0, r.jsxs)('div', {
        className: s.perkRow,
        children: [
            (0, r.jsx)('div', {
                className: s.perkIconContainer,
                children: (0, r.jsx)(t, {
                    color: null != o ? o : 'currentColor',
                    className: i()(s.perkIcon, n)
                })
            }),
            (0, r.jsx)('div', {
                className: s.perkDescription,
                children: l
            })
        ]
    });
}
