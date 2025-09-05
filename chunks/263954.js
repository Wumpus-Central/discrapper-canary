n.d(t, { Z: () => o }), n(953529);
var l = n(951288);
n(647438);
var i = n(120356),
    r = n.n(i),
    s = n(189651);
function o(e) {
    let { icon: t, iconClassName: n, description: i, color: o } = e;
    return (0, l.jsxs)("div", {
        className: s.perkRow,
        children: [
            (0, l.jsx)("div", {
                className: s.perkIconContainer,
                children: (0, l.jsx)(t, {
                    color: null != o ? o : "currentColor",
                    className: r()(s.perkIcon, n),
                }),
            }),
            (0, l.jsx)("div", {
                className: s.perkDescription,
                children: i,
            }),
        ],
    });
}
