"use strict";
n.d(t, { A: () => u, J: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(278416),
    o = n(834730),
    l = n(796226);
function u(e) {
    let { className: t, gradientColor: n = "default", children: i, Icon: o = a.g, customGraphic: u } = e;
    return (0, r.jsxs)("div", {
        className: s()(l.jt, l.qw, { [l.p3]: "nitro-pink" === n }, t),
        children: [
            null != u
                ? (0, r.jsx)("div", { className: l.B4, children: u })
                : (0, r.jsx)(o, { size: "xs", color: "currentColor" }),
            i,
        ],
    });
}
function c(e) {
    let { text: t, gradientColor: n, Icon: i = a.g, customGraphic: c, className: d } = e;
    return (0, r.jsx)(u, {
        className: s()(l.Cu, d),
        gradientColor: n,
        ...(null != c ? { customGraphic: c } : { Icon: i }),
        children: (0, r.jsx)(o.E, { variant: "text-sm/medium", color: "currentColor", className: l.Ct, children: t }),
    });
}
