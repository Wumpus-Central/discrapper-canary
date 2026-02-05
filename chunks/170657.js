"use strict";
n.d(t, { x: () => s });
var r = n(627968);
n(64700);
var i = n(996682),
    a = n(27989);
let s = (e) => {
    let { size: t = "md", width: n, height: s, color: o = "#CEA146", colorClass: l = "", ...u } = e,
        c = (0, a.J)(t),
        d = c?.width ?? n,
        _ = c?.height ?? s;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M10.78 1.5v18.08h10.5l-2.34 2.92H4.71l1.75-2.92V3.6L4.94 1.5h5.84Zm1.28 3.97a7.5 7.5 0 0 1 5.13 12.83h2.22a10.07 10.07 0 0 0 1.75-5.25 9.16 9.16 0 0 0-9.1-9.33v1.75ZM5.18 16.08a6.95 6.95 0 0 1-.7-3.15c0-1.16.23-2.21.7-3.15V6.75a9.81 9.81 0 0 0-2.45 6.07c0 2.45.81 4.66 2.45 6.3v-3.04Z",
            className: l,
        }),
    });
};
