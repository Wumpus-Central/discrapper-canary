t.d(r, { Z: () => a }), t(953529);
var n = t(951288);
t(647438);
var o = t(120356),
    s = t.n(o),
    i = t(56589);
function a(e) {
    let { icon: r, iconClassName: t, description: o, color: a } = e;
    return (0, n.jsxs)("div", {
        className: i.perkRow,
        children: [
            (0, n.jsx)("div", {
                className: i.perkIconContainer,
                children: (0, n.jsx)(r, {
                    color: null != a ? a : "currentColor",
                    className: s()(i.perkIcon, t),
                }),
            }),
            (0, n.jsx)("div", {
                className: i.perkDescription,
                children: o,
            }),
        ],
    });
}
