a.d(l, { E: () => c });
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
                d: "M11.8 3.75a5.98 5.98 0 0 1 8.98 7.85 1 1 0 0 1-1.6-1.21 3.98 3.98 0 0 0-5.97-5.22l-2.51 2.5a1 1 0 1 1-1.42-1.4l2.52-2.52ZM7.68 9.28a1 1 0 0 1 0 1.42L5.17 13.2a3.98 3.98 0 0 0 5.22 5.98 1 1 0 1 1 1.21 1.59 5.98 5.98 0 0 1-7.85-8.98l2.52-2.52a1 1 0 0 1 1.4 0Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
            (0, t.jsx)("path", {
                d: "M14.7 10.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 1 0 1.4 1.4l4-4ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
        ],
    });
};
