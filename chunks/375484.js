a.d(l, { G: () => c });
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
                fill: "string" == typeof h ? h : h.css,
                d: "M5.32 2.27a1 1 0 1 1 1.36 1.46A8.55 8.55 0 0 0 4 10c0 2.5 1.04 4.74 2.68 6.27a1 1 0 1 1-1.36 1.46A10.55 10.55 0 0 1 2 10c0-3.06 1.28-5.82 3.32-7.73Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M8 10a6 6 0 0 1 12 0v1a1 1 0 1 0 2 0v-1a8 8 0 1 0-16 0c0 3.85 3.04 6.56 4.85 7.84.69.49 1.15 1.34 1.68 2.4A5 5 0 0 0 22 18a1 1 0 1 0-2 0 3 3 0 0 1-5.68 1.34l-.02-.03c-.49-.97-1.14-2.28-2.3-3.1-1.74-1.24-4-3.42-4-6.21Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M16 11.17V10a2 2 0 1 0-4 0 1 1 0 1 1-2 0 4 4 0 0 1 8 0v2a1 1 0 0 1-1 1 1 1 0 0 0-1 1 1 1 0 1 1-2 0 3 3 0 0 1 2-2.83Z",
                className: r,
            }),
        ],
    });
};
