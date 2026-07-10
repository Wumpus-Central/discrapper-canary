a.d(l, { V: () => r });
var t = a(627968);
a(64700);
var e = a(661531),
    i = a(996682),
    h = a(27989);
let r = (s) => {
    let {
            size: l = "md",
            width: a,
            height: r,
            color: c = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...w
        } = s,
        n = (0, h.J)(l),
        o = n?.width ?? a,
        p = n?.height ?? r;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(w),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "m9.17 12.67 2.16 2.16a1 1 0 0 0 .99.25l2.57-.75A3 3 0 0 0 16.6 13l4.91-8.05a1.8 1.8 0 0 0-2.47-2.47L11 7.39a3 3 0 0 0-1.32 1.72l-.75 2.57a1 1 0 0 0 .25.99ZM8.03 13.14c.27.07.51.23.7.43l1.7 1.7c.2.19.36.43.43.7A4 4 0 0 1 7 21H2a1 1 0 1 1 0-2c.68 0 1.13-.77 1.04-1.44a4 4 0 0 1 5-4.42Z",
            className: d,
        }),
    });
};
