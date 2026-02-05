"use strict";
n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(953727);
function a(e) {
    let { width: t = 24, height: n = 24, color: a = "currentColor", ...s } = e;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 4 4",
        children: (0, r.jsx)("circle", { cx: "2", cy: "2", r: "2", fill: a }),
    });
}
