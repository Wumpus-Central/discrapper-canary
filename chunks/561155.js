"use strict";
n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(953727);
function a(e) {
    let { width: t = 12, height: n = 12, color: a = "currentColor", foreground: s, ...o } = e;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(o),
        width: t,
        height: n,
        viewBox: "0 0 12 12",
        children: (0, r.jsx)("rect", { className: s, fill: a, width: "10", height: "1", x: "1", y: "6" }),
    });
}
