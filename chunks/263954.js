n.d(t, { Z: () => a }), n(953529);
var i = n(951288);
n(647438);
var l = n(120356),
    r = n.n(l),
    s = n(56589);
function a(e) {
    let { icon: t, iconClassName: n, description: l, color: a } = e;
    return (0, i.jsxs)("div", {
        className: s.perkRow,
        children: [
            (0, i.jsx)("div", {
                className: s.perkIconContainer,
                children: (0, i.jsx)(t, {
                    color: null != a ? a : "currentColor",
                    className: r()(s.perkIcon, n),
                }),
            }),
            (0, i.jsx)("div", {
                className: s.perkDescription,
                children: l,
            }),
        ],
    });
}
