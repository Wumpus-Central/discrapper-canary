n.d(t, { j: () => r });
var i = n(627968);
n(64700);
var l = n(827734),
    a = n(996682),
    s = n(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: o = l.A.colors.ICON_FEEDBACK_WARNING,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, s.J)(t),
        h = u?.width ?? n,
        m = u?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, a.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M3 7a1 1 0 0 0 0 2 12 12 0 0 1 12 12 1 1 0 1 0 2 0A14 14 0 0 0 3 7Z",
                className: c,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M3 12a1 1 0 1 0 0 2 7 7 0 0 1 7 7 1 1 0 1 0 2 0 9 9 0 0 0-9-9ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
                className: c,
            }),
        ],
    });
};
