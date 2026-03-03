"use strict";
n.d(t, { d: () => a });
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
                fill: "#F3F3F4",
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
                fill: "#004C97",
                d: "M12.48 8.92c1.3.5 2.21 1.74 2.22 3.2 0 1.47-.93 2.71-2.22 3.21V8.92ZM10 15.33a3.44 3.44 0 0 1-2.22-3.2c0-1.47.92-2.72 2.22-3.21v6.4Z",
            }),
            (0, r.jsx)("path", {
                fill: "#004C97",
                fillRule: "evenodd",
                d: "M12.77 6.21c3.26 0 6.23 2.44 6.23 5.98 0 3.22-2.97 5.86-6.23 5.86h-1.55c-3.3.02-6-2.63-6-5.86a5.86 5.86 0 0 1 6-5.98h1.55Zm-1.53.5a5.44 5.44 0 0 0-5.45 5.41c0 3 2.44 5.42 5.45 5.42a5.44 5.44 0 0 0 5.45-5.42c0-3-2.44-5.42-5.45-5.42Z",
                clipRule: "evenodd",
            }),
        ],
    });
};
