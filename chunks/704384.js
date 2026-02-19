"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var s = n(175203),
    l = n(430452),
    r = n(348702);
function a(e) {
    let { aspectRatio: t, className: n, children: a, width: o, ...c } = e,
        d = l.Ay.getVideoComponent();
    return (0, i.jsx)("div", {
        style: { width: o },
        className: r.A,
        children: (0, i.jsxs)("div", {
            className: r.e,
            style: { aspectRatio: t },
            children: [(0, i.jsx)(s.Ay, { className: n, videoComponent: d, width: o, ...c }), a],
        }),
    });
}
