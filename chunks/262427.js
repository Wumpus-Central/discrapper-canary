n.d(t, { A: () => u, J: () => c });
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(278416),
    s = n(834730),
    o = n(796226);
function u(e) {
    let { className: t, gradientColor: n = "default", children: a, Icon: s = r.g, customGraphic: u } = e;
    return (0, l.jsxs)("div", {
        className: i()(o.jt, o.qw, { [o.p3]: "nitro-pink" === n }, t),
        children: [
            null != u
                ? (0, l.jsx)("div", { className: o.B4, children: u })
                : (0, l.jsx)(s, { size: "xs", color: "currentColor" }),
            a,
        ],
    });
}
function c(e) {
    let { text: t, gradientColor: n, Icon: a = r.g, customGraphic: c, className: d } = e;
    return (0, l.jsx)(u, {
        className: i()(o.Cu, d),
        gradientColor: n,
        ...(null != c ? { customGraphic: c } : { Icon: a }),
        children: (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "currentColor", className: o.Ct, children: t }),
    });
}
