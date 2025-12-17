n.d(t, {
    Mn: () => o,
    WM: () => c,
    _2: () => u,
}),
    n(953529);
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(608586);
let o = 16;
function u(e) {
    let { description: t, name: n, icon: l, onNavigate: u, className: c, missingNavIcon: E } = e;
    return (0, r.jsxs)(a.P3F, {
        onClick: u,
        className: i()(s.modInfoItem, null != u && s.modInfoAction, c),
        children: [
            null != l &&
                (0, r.jsx)("div", {
                    className: s.modInfoItemIcon,
                    children: l,
                }),
            null != n &&
                (0, r.jsx)("div", {
                    className: s.modInfoItemName,
                    children: n,
                }),
            (0, r.jsx)("div", {
                className: s.modInfoItemDescription,
                children: t,
            }),
            null != u &&
                (0, r.jsx)("div", {
                    className: s.modInfoItemActionIcon,
                    children: (0, r.jsx)(a.LJT, {
                        size: "custom",
                        width: o,
                        height: o,
                    }),
                }),
            null == u &&
                null != E &&
                (0, r.jsx)("div", {
                    className: s.modInfoItemActionIcon,
                    children: E,
                }),
        ],
    });
}
function c(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: s.modInfoItemContainer,
        children: t,
    });
}
