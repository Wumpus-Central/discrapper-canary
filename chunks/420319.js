a.d(l, { T: () => c });
var t = a(627968);
a(64700);
var s = a(827734),
    i = a(996682),
    n = a(27989);
let c = (e) => {
    let {
            size: l = "md",
            width: a,
            height: c,
            color: h = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = e,
        d = (0, n.J)(l),
        v = d?.width ?? a,
        g = d?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            d: "M2 11a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2ZM2 19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4ZM3 10a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1ZM22 7a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V7ZM2 4c0-1.1.9-2 2-2a1 1 0 1 1 0 2 1 1 0 0 1-2 0ZM20 2a1 1 0 1 0 0 2 1 1 0 1 0 2 0 2 2 0 0 0-2-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM14 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z",
            className: r,
        }),
    });
};
