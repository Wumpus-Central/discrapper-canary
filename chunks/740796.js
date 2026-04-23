a.d(l, { s: () => c });
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
                fillRule: "evenodd",
                d: "M19 16a3 3 0 1 0 1.98 5.25 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h1.24a3 3 0 0 0-1.29-.85M19 16c.17 0 .34.01.5.04L19 16Z",
                clipRule: "evenodd",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
            (0, t.jsx)("path", {
                d: "M19.95 16.15v.01l-.44-.12",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
            (0, t.jsx)("path", {
                fillRule: "evenodd",
                d: "M22 11.82V10a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a3 3 0 0 0 3 3h6.88c.37 0 .61-.38.5-.73a7 7 0 0 1 8.83-8.91c.15.05.3.03.44-.04l.02-.01c.2-.1.33-.28.33-.5ZM5 12.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Z",
                clipRule: "evenodd",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
            (0, t.jsx)("path", {
                d: "M8 2a1 1 0 1 0-2 0v.75c0 .14-.11.25-.25.25H5a3 3 0 0 0-3 3 1 1 0 0 0 1 1h18a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-.75a.25.25 0 0 1-.25-.25V2a1 1 0 1 0-2 0v.75c0 .14-.11.25-.25.25h-7.5A.25.25 0 0 1 8 2.75V2Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
        ],
    });
};
