e.d(s, { d: () => d });
var c = e(627968);
e(64700);
var t = e(661531),
    i = e(996682),
    a = e(27989);
let d = (l) => {
    let {
            size: s = "md",
            width: e,
            height: d,
            color: h = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...r
        } = l,
        n = (0, a.J)(s),
        o = n?.width ?? e,
        v = n?.height ?? d;
    return (0, c.jsxs)("svg", {
        ...(0, i.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, c.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M11.65 6.35 9.29 8.71a1 1 0 0 0-.29.7v5.18c0 .26.1.52.3.7l2.35 2.36c.2.2.5.2.7 0l2.36-2.36a1 1 0 0 0 .29-.7V9.4a1 1 0 0 0-.3-.7l-2.35-2.36a.5.5 0 0 0-.7 0Z",
                className: p,
            }),
            (0, c.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                fillRule: "evenodd",
                d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4ZM7.32 6.95 12 3.12l4.68 3.83c.07.06.32.4.32 1.05v8c0 .65-.25 1-.32 1.05L12 20.88l-4.68-3.83C7.25 16.99 7 16.65 7 16V8c0-.65.25-1 .32-1.05Z",
                clipRule: "evenodd",
                className: p,
            }),
        ],
    });
};
