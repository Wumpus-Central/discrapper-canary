a.d(l, { q: () => c });
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
                d: "M5 2a3 3 0 0 0-3 3v4.7l3.33 3.33 3.39-3.38a1.5 1.5 0 0 1 2.12 0l3.38 3.38 3.39-3.38a1.5 1.5 0 0 1 2.12 0L22 11.92V5a3 3 0 0 0-3-3H5Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "m22 14.75-3.33-3.34-3.39 3.39a1.5 1.5 0 0 1-2.12 0L9.78 11.4 6.39 14.8a1.5 1.5 0 0 1-2.12 0L2 12.53V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4.25Z",
                className: r,
            }),
        ],
    });
};
