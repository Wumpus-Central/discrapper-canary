n.d(r, { Z: () => l }), n(953529);
var t = n(951288);
n(647438);
var o = n(120356),
    i = n.n(o),
    c = n(189651);
function l(e) {
    let { icon: r, iconClassName: n, description: o, color: l } = e;
    return (0, t.jsxs)("div", {
        className: c.perkRow,
        children: [
            (0, t.jsx)("div", {
                className: c.perkIconContainer,
                children: (0, t.jsx)(r, {
                    color: null != l ? l : "currentColor",
                    className: i()(c.perkIcon, n),
                }),
            }),
            (0, t.jsx)("div", {
                className: c.perkDescription,
                children: o,
            }),
        ],
    });
}
