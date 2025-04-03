n.d(t, {
    Mn: () => s,
    WM: () => u,
    _2: () => c
}),
    n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(44946);
let s = 16;
function c(e) {
    let { description: t, name: n, icon: i, onNavigate: c, className: u, missingNavIcon: d } = e;
    return (0, r.jsxs)(o.P3F, {
        onClick: c,
        className: l()(a.modInfoItem, null != c && a.modInfoAction, u),
        children: [
            null != i &&
                (0, r.jsx)('div', {
                    className: a.modInfoItemIcon,
                    children: i
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
            null != c &&
                (0, r.jsx)('div', {
                    className: a.modInfoItemActionIcon,
                    children: (0, r.jsx)(o.LJT, {
                        size: 'custom',
                        width: s,
                        height: s
                    })
                }),
            null == c &&
                null != d &&
                (0, r.jsx)('div', {
                    className: a.modInfoItemActionIcon,
                    children: d
                })
        ]
    });
}
function u(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: a.modInfoItemContainer,
        children: t
    });
}
