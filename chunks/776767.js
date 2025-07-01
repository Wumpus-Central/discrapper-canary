(n.d(t, {
    Mn: () => o,
    WM: () => c,
    _2: () => u
}),
    n(953529));
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    s = n(481060),
    a = n(44946);
let o = 16;
function u(e) {
    let { description: t, name: n, icon: l, onNavigate: u, className: c, missingNavIcon: d } = e;
    return (0, r.jsxs)(s.P3F, {
        onClick: u,
        className: i()(a.modInfoItem, null != u && a.modInfoAction, c),
        children: [
            null != l &&
                (0, r.jsx)('div', {
                    className: a.modInfoItemIcon,
                    children: l
                }),
            null != n &&
                (0, r.jsx)('div', {
                    className: a.modInfoItemName,
                    children: n
                }),
            (0, r.jsx)('div', {
                className: a.modInfoItemDescription,
                children: t
            }),
            null != u &&
                (0, r.jsx)('div', {
                    className: a.modInfoItemActionIcon,
                    children: (0, r.jsx)(s.LJT, {
                        size: 'custom',
                        width: o,
                        height: o
                    })
                }),
            null == u &&
                null != d &&
                (0, r.jsx)('div', {
                    className: a.modInfoItemActionIcon,
                    children: d
                })
        ]
    });
}
function c(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: a.modInfoItemContainer,
        children: t
    });
}
