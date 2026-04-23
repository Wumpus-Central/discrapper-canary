"use strict";
n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(953727);
function s(e) {
    let { width: t = 12, height: n = 12, color: s = "currentColor", foreground: a, ...o } = e;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(o),
        width: t,
        height: n,
        viewBox: "0 0 12 12",
        children: (0, r.jsx)("path", {
            stroke: s,
            className: a,
            fill: "none",
            d: "M8.5,3.5 L6,6 L3.5,3.5 L6,6 L3.5,8.5 L6,6 L8.5,8.5 L6,6 L8.5,3.5 Z",
        }),
    });
}
