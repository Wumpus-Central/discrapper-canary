"use strict";
n.d(t, { u: () => s });
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
                fill: "url(#a)",
                fillRule: "evenodd",
                d: "M2.4 4C1.07 4 0 4.9 0 6v12c0 1.1 1.07 2 2.4 2h19.2c1.32 0 2.4-.9 2.4-2V6c0-1.1-1.08-2-2.4-2H2.4Z",
                clipRule: "evenodd",
            }),
            (0, r.jsx)("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M8 12v-1h4a3.49 3.49 0 0 0-3.5-3h-1a3.5 3.5 0 1 0 0 7h1a3.49 3.49 0 0 0 3.5-3H8Zm12 1.5c0-.83-.67-1.5-1.5-1.5H13v3h5.5c.83 0 1.5-.67 1.5-1.5ZM18.5 11H13V8h5.5a1.5 1.5 0 1 1 0 3Z",
                clipRule: "evenodd",
            }),
            (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                    id: "a",
                    x1: "24",
                    x2: "8.68",
                    y1: "4",
                    y2: "24.87",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, r.jsx)("stop", { stopColor: "#102C5E" }),
                        (0, r.jsx)("stop", { offset: ".53", stopColor: "#107B9D" }),
                        (0, r.jsx)("stop", { offset: "1", stopColor: "#219943" }),
                    ],
                }),
            }),
        ],
    });
};
