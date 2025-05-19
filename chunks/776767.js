n.d(t, {
    Mn: () => s,
    WM: () => u,
    _2: () => c
}),
    n(953529);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(228419);
let s = 16;
function c(e) {
    let { description: t, name: n, icon: i, onNavigate: c, className: u, missingNavIcon: d } = e;
    return (0, r.jsxs)(a.P3F, {
        onClick: c,
        className: l()(o.modInfoItem, null != c && o.modInfoAction, u),
        children: [
            null != i &&
                (0, r.jsx)('div', {
                    className: o.modInfoItemIcon,
                    children: i
                }),
            null != n &&
                (0, r.jsx)('div', {
                    className: o.modInfoItemName,
                    children: n
                }),
            (0, r.jsx)('div', {
                className: o.modInfoItemDescription,
                children: t
            }),
            null != c &&
                (0, r.jsx)('div', {
                    className: o.modInfoItemActionIcon,
                    children: (0, r.jsx)(a.LJT, {
                        size: 'custom',
                        width: s,
                        height: s
                    })
                }),
            null == c &&
                null != d &&
                (0, r.jsx)('div', {
                    className: o.modInfoItemActionIcon,
                    children: d
                })
        ]
    });
}
function u(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: o.modInfoItemContainer,
        children: t
    });
}
