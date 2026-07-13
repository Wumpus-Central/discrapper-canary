l.d(s, { a: () => a });
var t = l(627968);
l(64700);
var e = l(661531),
    v = l(996682),
    i = l(27989);
let a = (h) => {
    let {
            size: s = "md",
            width: l,
            height: a,
            color: c = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = h,
        w = (0, i.J)(s),
        n = w?.width ?? l,
        o = w?.height ?? a;
    return (0, t.jsx)("svg", {
        ...(0, v.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "m21.67 12-7.25 7.07h-3.23L7.17 23v-3.93H2.33V4.93L6.36 1h15.3v11Zm-14.5 2.36h3.62v2.75l2.82-2.75h3.22l3.23-3.15V2.57H7.16v11.79Zm6.04-9.04v4.72H11.6V5.32h1.6Zm4.43 4.72h-1.61V5.32h1.6v4.72Z",
            className: r,
        }),
    });
};
