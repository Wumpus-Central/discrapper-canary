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
                d: "M16.44 7c.39.6.56 1.22.56 2 0 2.5-2.27 5.73-4.1 8H8.68L7 7.55l3.68-.33.9 6.73c.83-1.28 1.85-3.28 1.85-4.64 0-.75-.13-1.26-.35-1.67L16.44 7Z",
            }),
        ],
    });
};
