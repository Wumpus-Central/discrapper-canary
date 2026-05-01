"use strict";
n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var r = n(953727);
function s(e) {
    let { width: t = 12, height: n = 12, color: s = "currentColor", foreground: a, ...o } = e;
    return (0, i.jsx)("svg", {
        ...(0, r.A)(o),
        width: t,
        height: n,
        viewBox: "0 0 12 12",
        children: (0, i.jsx)("rect", { className: a, fill: s, width: "10", height: "1", x: "1", y: "6" }),
    });
}
