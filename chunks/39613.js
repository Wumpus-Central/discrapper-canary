a.d(l, { D: () => c });
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
            d: "m11.33 14.83-2.16-2.16a1 1 0 0 1-.25-.99l.75-2.57A3 3 0 0 1 11 7.4l8.05-4.91a1.8 1.8 0 0 1 2.47 2.47L16.61 13a3 3 0 0 1-1.72 1.32l-2.57.75a1 1 0 0 1-.99-.25ZM8.74 13.57c-.2-.2-.44-.36-.7-.43a4 4 0 0 0-5 4.42C3.14 18.23 2.68 19 2 19a1 1 0 1 0 0 2h5a4 4 0 0 0 3.86-5.03c-.07-.27-.23-.51-.43-.7l-1.7-1.7ZM19 16a3 3 0 1 0 1.98 5.25 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h1.24A3 3 0 0 0 19 16Z",
            className: r,
        }),
    });
};
