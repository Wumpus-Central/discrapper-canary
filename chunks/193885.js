e.d(a, { V: () => d });
var s = e(627968);
e(64700);
var t = e(661531),
    i = e(996682),
    h = e(27989);
let d = (l) => {
    let {
            size: a = "md",
            width: e,
            height: d,
            color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...n
        } = l,
        o = (0, h.J)(a),
        w = o?.width ?? e,
        p = o?.height ?? d;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "m9.17 12.67 2.16 2.16a1 1 0 0 0 .99.25l2.57-.75A3 3 0 0 0 16.6 13l4.91-8.05a1.8 1.8 0 0 0-2.47-2.47L11 7.39a3 3 0 0 0-1.32 1.72l-.75 2.57a1 1 0 0 0 .25.99ZM8.03 13.14c.27.07.51.23.7.43l1.7 1.7c.2.19.36.43.43.7A4 4 0 0 1 7 21H2a1 1 0 1 1 0-2c.68 0 1.13-.77 1.04-1.44a4 4 0 0 1 5-4.42Z",
            className: r,
        }),
    });
};
