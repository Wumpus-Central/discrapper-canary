"use strict";
n.d(t, { p: () => s });
var i = n(627968);
n(64700);
var r = n(996682),
    a = n(27989);
let s = (e) => {
    let { size: t = "md", width: n, height: s, color: l = "#4E5058", colorClass: o = "", ...d } = e,
        c = (0, a.J)(t),
        u = c?.width ?? n,
        _ = c?.height ?? s;
    return (0, i.jsx)("svg", {
        ...(0, r.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M13.86 10.47 21.15 2h-1.73l-6.33 7.35L8.04 2H2.22l7.64 11.12L2.22 22h1.72l6.68-7.77L15.96 22h5.82l-7.92-11.53Zm-2.36 2.75-.78-1.11L4.57 3.3h2.65l4.97 7.11.77 1.1 6.46 9.25h-2.65l-5.27-7.54Z",
            className: o,
        }),
    });
};
