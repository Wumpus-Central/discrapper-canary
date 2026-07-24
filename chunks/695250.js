"use strict";
n.d(t, { m: () => l });
var i = n(627968);
n(64700);
var r = n(661531),
    a = n(996682),
    s = n(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            secondaryColor: c = "#000",
            secondaryColorClass: u = "",
            tertiaryColor: _ = "#fff",
            tertiaryColorClass: E = "",
            ...A
        } = e,
        h = (0, s.J)(t),
        I = h?.width ?? n,
        f = h?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, a.A)(A),
        xmlns: "http://www.w3.org/2000/svg",
        width: I,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M2 2v20h20V2H2Zm16 8h-4v2h2v6h-2v-2h-4v2H8v-6h2v-2H6V6h4v4h4V6h4v4Z",
                className: d,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M10 18.33H8V18h2v.33ZM16 18.33h-2V18h2v.33ZM14 16.33h-4V16h4v.33ZM10 12.33H8V12h2v.33ZM16 12.33h-2V12h2v.33ZM18 10.33H6V10h12v.33ZM10 6v.33H6V6h4ZM18 6.33h-4V6h4v.33Z",
                className: d,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M14 10h-4v.33h4V10ZM10 12H8v.33h2V12ZM16 12h-2v.33h2V12ZM18 6h-4v.33h4V6ZM10 6H6v.33h4V6Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof _ ? _ : _.css,
                d: "M18 10h-4v.33h4V10ZM14 16h-4v.33h4V16ZM16 18h-2v.33h2V18ZM10 18H8v.33h2V18ZM10 10H6v.33h4V10Z",
                className: E,
            }),
        ],
    });
};
