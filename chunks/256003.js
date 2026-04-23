a.d(l, { N: () => c });
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
                d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h3.67c.38 0 .63-.42.52-.8A4 4 0 0 1 12 21v-3.5a.5.5 0 0 0-.5-.5H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V4a3 3 0 0 0-3-3H8Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M14 17c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v.36c0-.21.14-.4.34-.47l2-.67a.5.5 0 0 1 .66.47v4.62a.5.5 0 0 1-.66.47l-2-.67a.5.5 0 0 1-.34-.47V21a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-4Z",
                className: r,
            }),
        ],
    });
};
