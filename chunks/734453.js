"use strict";
n.d(t, { $: () => a });
var r = n(627968);
n(64700);
var i = n(996682),
    s = n(27989);
let a = (e) => {
    let { size: t = "md", width: n, height: a, color: o = "#000", colorClass: l = "", ...u } = e,
        c = (0, s.J)(t),
        d = c?.width ?? n,
        _ = c?.height ?? a;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M6.23 2 2 17.77 17.77 22 22 6.23 6.23 2Zm7.38 12.8-4.4-1.19 1.18-4.4 4.4 1.18-1.18 4.4Z",
            className: l,
        }),
    });
};
