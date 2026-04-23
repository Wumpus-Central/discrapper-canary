a.d(l, { g: () => c });
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
                d: "M8.3 6.3a1 1 0 0 1 1.4 0L12 8.58l2.3-2.3a1 1 0 1 1 1.4 1.42L13.42 10l2.3 2.3a1 1 0 0 1-1.42 1.4L12 11.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 10l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                fillRule: "evenodd",
                d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8Zm3 18a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4Z",
                clipRule: "evenodd",
                className: r,
            }),
        ],
    });
};
