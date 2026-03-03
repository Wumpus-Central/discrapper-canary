"use strict";
n.d(t, { T: () => a });
var r = n(627968);
n(64700);
var i = n(996682),
    s = n(27989);
let a = (e) => {
    let { size: t = "md", width: n, height: a, ...o } = e,
        l = (0, s.J)(t),
        u = l?.width ?? n,
        c = l?.height ?? a;
    return (0, r.jsxs)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: c,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, r.jsx)("mask", {
                id: "a",
                fill: "#fff",
                children: (0, r.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M2.4 4h19.2c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2Z",
                    clipRule: "evenodd",
                }),
            }),
            (0, r.jsx)("path", {
                fill: "#211D1D",
                fillRule: "evenodd",
                d: "M2.4 4h19.2c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2Z",
                clipRule: "evenodd",
            }),
            (0, r.jsx)("path", {
                fill: "#97979F",
                fillOpacity: ".3",
                d: "M2.4 4v.5h19.2v-1H2.4V4Zm19.2 0v.5c1.14 0 1.9.75 1.9 1.5h1c0-1.46-1.39-2.5-2.9-2.5V4ZM24 6h-.5v12h1V6H24Zm0 12h-.5c0 .75-.76 1.5-1.9 1.5v1c1.51 0 2.9-1.04 2.9-2.5H24Zm-2.4 2v-.5H2.4v1h19.2V20ZM2.4 20v-.5C1.26 19.5.5 18.75.5 18h-1c0 1.46 1.39 2.5 2.9 2.5V20ZM0 18h.5V6h-1v12H0ZM0 6h.5c0-.75.76-1.5 1.9-1.5v-1C.89 3.5-.5 4.54-.5 6H0Z",
                mask: "url(#a)",
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
