"use strict";
n.d(t, { A: () => u, J: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(278416),
    o = n(834730),
    l = n(796226);
function u(e) {
    let {
        className: t,
        gradientColor: n = "default",
        children: r,
        Icon: o = a.g,
        iconSize: u = "xs",
        customGraphic: c,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(l.jt, l.qw, { [l.p3]: "nitro-pink" === n, [l.U1]: "green" === n }, t),
        children: [
            null != c
                ? (0, i.jsx)("div", { className: l.B4, children: c })
                : (0, i.jsx)(o, { size: u, color: "currentColor" }),
            r,
        ],
    });
}
function c(e) {
    let { text: t, gradientColor: n, Icon: r = a.g, iconSize: c, customGraphic: d, className: _ } = e;
    return (0, i.jsx)(u, {
        className: s()(l.Cu, _),
        gradientColor: n,
        ...(null != d ? { customGraphic: d } : { Icon: r, iconSize: c }),
        children: (0, i.jsx)(o.E, { variant: "text-sm/medium", color: "currentColor", className: l.Ct, children: t }),
    });
}
