"use strict";
n.d(t, { o: () => a });
var r = n(627968);
n(64700);
var i = n(996682),
    s = n(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: o = "#52A535",
            colorClass: l = "",
            secondaryColor: u = "#000",
            secondaryColorClass: c = "",
            tertiaryColor: d = "#86D562",
            tertiaryColorClass: _ = "",
            quaternaryColor: f = "#2A641C",
            quaternaryColorClass: p = "",
            ...h
        } = e,
        m = (0, s.J)(t),
        E = m?.width ?? n,
        g = m?.height ?? a;
    return (0, r.jsxs)("svg", {
        ...(0, i.A)(h),
        xmlns: "http://www.w3.org/2000/svg",
        width: E,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, r.jsx)("path", { fill: "string" == typeof o ? o : o.css, d: "M22 2H2v20h20V2Z", className: l }),
            (0, r.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                d: "M18 10V6h-4v4h-4v2H8v6h2v-2h4v2h2v-6h-2v-2h4Z",
                className: c,
            }),
            (0, r.jsx)("path", { fill: "string" == typeof u ? u : u.css, d: "M10 6H6v4h4V6Z", className: c }),
            (0, r.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M18 10h-4v.33h4V10ZM14 16h-4v.33h4V16ZM16 18h-2v.33h2V18ZM10 18H8v.33h2V18ZM10 10H6v.33h4V10Z",
                className: _,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof f ? f : f.css,
                d: "M14 10h-4v.33h4V10ZM10 12H8v.33h2V12ZM16 12h-2v.33h2V12ZM18 6h-4v.33h4V6ZM10 6H6v.33h4V6Z",
                className: p,
            }),
        ],
    });
};
