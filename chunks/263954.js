t.d(n, { Z: () => a }), t(953529);
var i = t(951288);
t(647438);
var l = t(120356),
    r = t.n(l),
    s = t(56589);
function a(e) {
    let { icon: n, iconClassName: t, description: l, color: a } = e;
    return (0, i.jsxs)("div", {
        className: s.perkRow,
        children: [
            (0, i.jsx)("div", {
                className: s.perkIconContainer,
                children: (0, i.jsx)(n, {
                    color: null != a ? a : "currentColor",
                    className: r()(s.perkIcon, t),
                }),
            }),
            (0, i.jsx)("div", {
                className: s.perkDescription,
                children: l,
            }),
        ],
    });
}
