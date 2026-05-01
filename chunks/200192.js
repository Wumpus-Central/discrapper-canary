n.d(t, { Q: () => a });
var l = n(627968);
n(64700);
var i = n(661531),
    s = n(996682),
    r = n(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.ICON_FEEDBACK_POSITIVE,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, r.J)(t),
        h = u?.width ?? n,
        g = u?.height ?? a;
    return (0, l.jsxs)("svg", {
        ...(0, s.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M2 3a1 1 0 0 1 1-1 19 19 0 0 1 19 19 1 1 0 1 1-2 0A17 17 0 0 0 3 4a1 1 0 0 1-1-1Z",
                className: c,
            }),
            (0, l.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M2 8a1 1 0 0 1 1-1 14 14 0 0 1 14 14 1 1 0 1 1-2 0A12 12 0 0 0 3 9a1 1 0 0 1-1-1Z",
                className: c,
            }),
            (0, l.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M3 12a1 1 0 1 0 0 2 7 7 0 0 1 7 7 1 1 0 1 0 2 0 9 9 0 0 0-9-9ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
                className: c,
            }),
        ],
    });
};
