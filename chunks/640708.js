"use strict";
n.d(t, { A: () => a });
var i = n(477900);
n(582128);
var r = n(953727);
function a(e) {
    let { width: t = 24, height: n = 24, color: a = "currentColor", ...s } = e;
    return (0, i.jsx)("svg", {
        ...(0, r.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 4 4",
        children: (0, i.jsx)("circle", { cx: "2", cy: "2", r: "2", fill: a }),
    });
}
