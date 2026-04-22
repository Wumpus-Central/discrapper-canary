a.d(l, { K: () => c });
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
                d: "M7 2a1 1 0 0 0-2 0v3H2a1 1 0 1 0 0 2h3v8a4 4 0 0 0 4 4h8v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2V2Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M9 7h6a2 2 0 0 1 2 2v6h2V9a4 4 0 0 0-4-4H9v2Z",
                className: r,
            }),
        ],
    });
};
