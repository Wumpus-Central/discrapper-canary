n.d(t, { Z: () => s }), n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(56589);
function s(e) {
    let { icon: t, iconClassName: n, description: i, color: s } = e;
    return (0, r.jsxs)("div", {
        className: o.perkRow,
        children: [
            (0, r.jsx)("div", {
                className: o.perkIconContainer,
                children: (0, r.jsx)(t, {
                    color: null != s ? s : "currentColor",
                    className: a()(o.perkIcon, n),
                }),
            }),
            (0, r.jsx)("div", {
                className: o.perkDescription,
                children: i,
            }),
        ],
    });
}
