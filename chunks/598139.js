"use strict";
n.d(t, { T: () => s });
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
                fill: "#211D1D",
                fillRule: "evenodd",
                d: "M2.4 4h19.2c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2Z",
                clipRule: "evenodd",
            }),
            (0, r.jsx)("path", {
                fill: "#FFD634",
                fillRule: "evenodd",
                d: "M6 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z",
                clipRule: "evenodd",
            }),
            (0, r.jsx)("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M7 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM18.42 11.54H20V10h1v4h-1v-1.65h-1.5V14h-1v-4h1l-.08 1.54Zm-2-.66V14h-1v-3.12h-.86V10h2.75v.88h-.89Zm-3.11 1.63-.47-1.33-.47 1.33h.94Zm.27.79H12.1l-.24.7h-1.11l1.52-4h1.14l1.52 4h-1.11l-.24-.7Z",
                clipRule: "evenodd",
            }),
        ],
    });
};
