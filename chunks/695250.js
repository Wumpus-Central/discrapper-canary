l.d(t, { m: () => r });
var n = l(627968);
l(64700);
var i = l(661531),
    s = l(996682),
    a = l(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: l,
            height: r,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            secondaryColor: d = "#000",
            secondaryColorClass: u = "",
            tertiaryColor: m = "#fff",
            tertiaryColorClass: h = "",
            ...x
        } = e,
        g = (0, a.J)(t),
        f = g?.width ?? l,
        v = g?.height ?? r;
    return (0, n.jsxs)("svg", {
        ...(0, s.A)(x),
        xmlns: "http://www.w3.org/2000/svg",
        width: f,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M2 2v20h20V2H2Zm16 8h-4v2h2v6h-2v-2h-4v2H8v-6h2v-2H6V6h4v4h4V6h4v4Z",
                className: o,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M10 18.33H8V18h2v.33ZM16 18.33h-2V18h2v.33ZM14 16.33h-4V16h4v.33ZM10 12.33H8V12h2v.33ZM16 12.33h-2V12h2v.33ZM18 10.33H6V10h12v.33ZM10 6v.33H6V6h4ZM18 6.33h-4V6h4v.33Z",
                className: o,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M14 10h-4v.33h4V10ZM10 12H8v.33h2V12ZM16 12h-2v.33h2V12ZM18 6h-4v.33h4V6ZM10 6H6v.33h4V6Z",
                className: u,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof m ? m : m.css,
                d: "M18 10h-4v.33h4V10ZM14 16h-4v.33h4V16ZM16 18h-2v.33h2V18ZM10 18H8v.33h2V18ZM10 10H6v.33h4V10Z",
                className: h,
            }),
        ],
    });
};
