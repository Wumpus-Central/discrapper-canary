a.d(l, { O: () => c });
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
    return (0, t.jsxs)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                d: "M19 16A3 3 0 1 0 21 21.25a1 1 0 1 1 1.32 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h1.23A3 3 0 0 0 19 16Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
            (0, t.jsx)("path", {
                d: "M22 12c0 .1-.06.2-.16.23a3 3 0 0 0-.19.09.58.58 0 0 1-.44.04 7 7 0 0 0-8.8 9c.1.3-.09.64-.4.64H2.2a1 1 0 0 1-.76-1.66l2.07-2.37a.52.52 0 0 0 .04-.61A10 10 0 1 1 22 12Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
        ],
    });
};
