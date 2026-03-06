"use strict";
n.d(t, { A: () => l, J: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(433109);
function l(e) {
    let { className: t, children: n, Icon: i = a.gqV, customGraphic: l } = e;
    return (0, r.jsxs)("div", {
        className: s()(o.jt, o.qw, t),
        children: [null != l ? l : (0, r.jsx)(i, { size: "xs", color: "currentColor" }), n],
    });
}
function u(e) {
    let { text: t, Icon: n = a.gqV, customGraphic: i, className: u } = e,
        c = null != i ? { customGraphic: i } : { Icon: n };
    return (0, r.jsx)(l, {
        className: s()(o.Cu, u),
        ...c,
        children: (0, r.jsx)(a.EYj, { variant: "text-sm/medium", color: "currentColor", className: o.Ct, children: t }),
    });
}
