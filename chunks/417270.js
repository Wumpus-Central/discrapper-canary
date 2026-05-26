h.d(t, { m: () => r });
var l = h(627968);
h(64700);
var s = h(661531),
    e = h(996682),
    i = h(27989);
let r = (a) => {
    let {
            size: t = "md",
            width: h,
            height: r,
            color: v = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...d
        } = a,
        w = (0, i.J)(t),
        o = w?.width ?? h,
        c = w?.height ?? r;
    return (0, l.jsx)("svg", {
        ...(0, e.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: c,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof v ? v : v.css,
            d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
            className: n,
        }),
    });
};
