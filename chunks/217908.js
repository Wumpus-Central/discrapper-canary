"use strict";
n.d(t, { a: () => s });
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
                fill: "#F5B214",
                fillRule: "evenodd",
                d: "M2.4 4h19.2c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2Z",
                clipRule: "evenodd",
            }),
            (0, r.jsx)("path", {
                fill: "#221E1F",
                fillRule: "evenodd",
                d: "M8 18h2v-2H8a1 1 0 1 0 0 2Zm0-6h2v-2H8a1 1 0 0 0 0 2Zm0 3h2v-2H8a1 1 0 1 0 0 2Zm9-1v6h-4a2 2 0 0 1-2-2V9a1 1 0 0 1 2 0v5h1v-3l2.16 1.44c.52.35.84.93.84 1.56Z",
                clipRule: "evenodd",
            }),
        ],
    });
};
