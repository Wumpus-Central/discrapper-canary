"use strict";
n.d(t, { n: () => s });
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
                fill: "#000",
                fillRule: "evenodd",
                d: "M2.4 4h19.2c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2Z",
                clipRule: "evenodd",
            }),
            (0, r.jsx)("path", { fill: "#7375CF", d: "M14.16 8.06H9.84v7.77h4.32V8.06Z" }),
            (0, r.jsx)("path", {
                fill: "#EB001B",
                d: "M10.11 11.94A4.94 4.94 0 0 1 12 8.06a4.94 4.94 0 1 0 0 7.77 4.94 4.94 0 0 1-1.89-3.89Z",
            }),
            (0, r.jsx)("path", {
                fill: "#00A2E5",
                d: "M19.53 15v-.15h.06v-.03h-.16v.03h.06V15h.04Zm.32 0v-.18h-.05l-.06.13-.06-.13h-.05V15h.04v-.15l.05.13h.04l.05-.13v.15h.04ZM20 11.94a4.94 4.94 0 0 1-8 3.9 4.95 4.95 0 0 0 0-7.78 4.94 4.94 0 0 1 8 3.88Z",
            }),
        ],
    });
};
