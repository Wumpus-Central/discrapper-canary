i.d(e, { v: () => s });
var l = i(477900),
    a = i(503698),
    g = i.n(a),
    t = i(85463),
    h = i(834730),
    n = i(727960);
let d = {
    blurpleLight: "blurple-light",
    blurpleDark: "blurple-dark",
    greenLight: "green-light",
    greenDark: "green-dark",
    orangeLight: "orange-light",
    yellowLight: "yellow-light",
    redLight: "red-light",
    redDark: "red-dark",
    grayLight: "gray-light",
    grayMedium: "gray-medium",
    grayDark: "gray-dark",
};
function s(r) {
    let { text: e, variant: i = "grayLight", icon: a, iconColor: s } = r,
        u = d[i],
        c = (0, t.N)(),
        o =
            null != a
                ? (0, l.jsx)(a, { color: s ?? "currentColor", size: "xxs", "aria-hidden": !0, className: n.icon })
                : null;
    return (0, l.jsxs)(h.E, {
        variant: c,
        className: g()(n.chip, n[u], { [n["with-icon"]]: null != a }),
        children: [o, e],
    });
}
