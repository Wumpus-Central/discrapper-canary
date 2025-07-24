(t.d(e, {
    Mn: () => a,
    WM: () => g,
    _2: () => o
}),
    t(953529));
var n = t(255367);
t(73800);
var r = t(120356),
    l = t.n(r),
    i = t(481060),
    s = t(44946);
let a = 16;
function o(A) {
    let { description: e, name: t, icon: r, onNavigate: o, className: g, missingNavIcon: f } = A;
    return (0, n.jsxs)(i.P3F, {
        onClick: o,
        className: l()(s.modInfoItem, null != o && s.modInfoAction, g),
        children: [
            null != r &&
                (0, n.jsx)('div', {
                    className: s.modInfoItemIcon,
                    children: r
                }),
            null != t &&
                (0, n.jsx)('div', {
                    className: s.modInfoItemName,
                    children: t
                }),
            (0, n.jsx)('div', {
                className: s.modInfoItemDescription,
                children: e
            }),
            null != o &&
                (0, n.jsx)('div', {
                    className: s.modInfoItemActionIcon,
                    children: (0, n.jsx)(i.LJT, {
                        size: 'custom',
                        width: a,
                        height: a
                    })
                }),
            null == o &&
                null != f &&
                (0, n.jsx)('div', {
                    className: s.modInfoItemActionIcon,
                    children: f
                })
        ]
    });
}
function g(A) {
    let { children: e } = A;
    return (0, n.jsx)('div', {
        className: s.modInfoItemContainer,
        children: e
    });
}
