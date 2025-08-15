t.d(e, {
    Mn: () => s,
    WM: () => g,
    _2: () => o,
}),
    t(953529);
var n = t(951288);
t(647438);
var r = t(120356),
    l = t.n(r),
    i = t(481060),
    a = t(938556);
let s = 16;
function o(A) {
    let { description: e, name: t, icon: r, onNavigate: o, className: g, missingNavIcon: c } = A;
    return (0, n.jsxs)(i.P3F, {
        onClick: o,
        className: l()(a.modInfoItem, null != o && a.modInfoAction, g),
        children: [
            null != r &&
                (0, n.jsx)("div", {
                    className: a.modInfoItemIcon,
                    children: r,
                }),
            null != t &&
                (0, n.jsx)("div", {
                    className: a.modInfoItemName,
                    children: t,
                }),
            (0, n.jsx)("div", {
                className: a.modInfoItemDescription,
                children: e,
            }),
            null != o &&
                (0, n.jsx)("div", {
                    className: a.modInfoItemActionIcon,
                    children: (0, n.jsx)(i.LJT, {
                        size: "custom",
                        width: s,
                        height: s,
                    }),
                }),
            null == o &&
                null != c &&
                (0, n.jsx)("div", {
                    className: a.modInfoItemActionIcon,
                    children: c,
                }),
        ],
    });
}
function g(A) {
    let { children: e } = A;
    return (0, n.jsx)("div", {
        className: a.modInfoItemContainer,
        children: e,
    });
}
