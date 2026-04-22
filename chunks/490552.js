a.d(l, { o: () => n });
var t = a(627968);
a(64700);
var s = a(996682),
    i = a(27989);
let n = (e) => {
    let {
            size: l = "md",
            width: a,
            height: n,
            color: c = "#52A535",
            colorClass: h = "",
            secondaryColor: r = "#000",
            secondaryColorClass: o = "",
            tertiaryColor: d = "#86D562",
            tertiaryColorClass: v = "",
            quaternaryColor: g = "#2A641C",
            quaternaryColorClass: p = "",
            ...m
        } = e,
        f = (0, i.J)(l),
        w = f?.width ?? a,
        x = f?.height ?? n;
    return (0, t.jsxs)("svg", {
        ...(0, s.A)(m),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: x,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", { fill: "string" == typeof c ? c : c.css, d: "M22 2H2v20h20V2Z", className: h }),
            (0, t.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M18 10V6h-4v4h-4v2H8v6h2v-2h4v2h2v-6h-2v-2h4Z",
                className: o,
            }),
            (0, t.jsx)("path", { fill: "string" == typeof r ? r : r.css, d: "M10 6H6v4h4V6Z", className: o }),
            (0, t.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M18 10h-4v.33h4V10ZM14 16h-4v.33h4V16ZM16 18h-2v.33h2V18ZM10 18H8v.33h2V18ZM10 10H6v.33h4V10Z",
                className: v,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof g ? g : g.css,
                d: "M14 10h-4v.33h4V10ZM10 12H8v.33h2V12ZM16 12h-2v.33h2V12ZM18 6h-4v.33h4V6ZM10 6H6v.33h4V6Z",
                className: p,
            }),
        ],
    });
};
