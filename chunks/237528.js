i.d(e, { v: () => d });
var l = i(477900),
    a = i(503698),
    g = i.n(a),
    t = i(834730),
    h = i(727960);
let n = {
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
function d(r) {
    let { text: e, variant: i = "grayLight", icon: a, iconColor: d } = r,
        s = n[i],
        o =
            null != a
                ? (0, l.jsx)(a, { color: d ?? "currentColor", size: "xxs", "aria-hidden": !0, className: h.icon })
                : null;
    return (0, l.jsxs)(t.E, {
        variant: "body-xs/semibold",
        className: g()(h.chip, h[s], { [h["with-icon"]]: null != a }),
        children: [o, e],
    });
}
