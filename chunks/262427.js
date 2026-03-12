"use strict";
n.d(t, { A: () => l, J: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(433109);
function l(e) {
    let { className: t, gradientColor: n = "default", children: i, Icon: l = a.gqV, customGraphic: u } = e;
    return (0, r.jsxs)("div", {
        className: s()(o.jt, o.qw, { [o.p3]: "nitro-pink" === n }, t),
        children: [null != u ? u : (0, r.jsx)(l, { size: "xs", color: "currentColor" }), i],
    });
}
function u(e) {
    let { text: t, gradientColor: n, Icon: i = a.gqV, customGraphic: u, className: c } = e,
        d = null != u ? { customGraphic: u } : { Icon: i };
    return (0, r.jsx)(l, {
        className: s()(o.Cu, c),
        gradientColor: n,
        ...d,
        children: (0, r.jsx)(a.EYj, { variant: "text-sm/medium", color: "currentColor", className: o.Ct, children: t }),
    });
}
