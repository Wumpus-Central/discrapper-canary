"use strict";
n.d(t, { v: () => s });
var r = n(627968);
n(64700);
var i = n(996682),
    a = n(27989);
let s = (e) => {
    let { size: t = "md", width: n, height: s, ...o } = e,
        l = (0, a.J)(t),
        u = l?.width ?? n,
        c = l?.height ?? s;
    return (0, r.jsxs)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: c,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, r.jsx)("path", {
                fill: "#F3F3F4",
                fillRule: "evenodd",
                d: "M2.4 4h19.2c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2Z",
                clipRule: "evenodd",
            }),
            (0, r.jsx)("path", {
                fill: "#008CFF",
                d: "M16.92 7.08c.37.6.53 1.2.53 1.97 0 2.45-2.14 5.63-3.88 7.87H9.59L8 7.62l3.48-.32.84 6.61c.79-1.25 1.76-3.22 1.76-4.56a3.6 3.6 0 0 0-.33-1.64l3.17-.63Z",
            }),
        ],
    });
};
