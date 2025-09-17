t.d(n, { Z: () => o }), t(953529);
var l = t(951288);
t(647438);
var i = t(120356),
    r = t.n(i),
    s = t(56589);
function o(e) {
    let { icon: n, iconClassName: t, description: i, color: o } = e;
    return (0, l.jsxs)("div", {
        className: s.perkRow,
        children: [
            (0, l.jsx)("div", {
                className: s.perkIconContainer,
                children: (0, l.jsx)(n, {
                    color: null != o ? o : "currentColor",
                    className: r()(s.perkIcon, t),
                }),
            }),
            (0, l.jsx)("div", {
                className: s.perkDescription,
                children: i,
            }),
        ],
    });
}
