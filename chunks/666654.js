l.d(t, { O: () => h });
var e = l(627968);
l(64700);
var a = l(661531),
    i = l(996682),
    c = l(27989);
let h = (s) => {
    let {
            size: t = "md",
            width: l,
            height: h,
            color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = s,
        A = (0, c.J)(t),
        o = A?.width ?? l,
        u = A?.height ?? h;
    return (0, e.jsxs)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: u,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, e.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                fillRule: "evenodd",
                d: "M21.76.83a5.02 5.02 0 0 1 .78 7.7 5 5 0 0 1-7.07 0 5.02 5.02 0 0 1 0-7.07 5 5 0 0 1 6.29-.63Zm-4.88 2.05a3 3 0 0 1 3.41-.59l-4 4a3 3 0 0 1 .59-3.41Zm4.83.83-4 4a3 3 0 0 0 4-4Z",
                clipRule: "evenodd",
                className: r,
            }),
            (0, e.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                d: "M12 2c.33 0 .51.35.4.66a6.99 6.99 0 0 0 3.04 8.37c.2.12.31.37.21.6A4 4 0 0 1 8 10V6a4 4 0 0 1 4-4Z",
                className: r,
            }),
            (0, e.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                d: "M17.55 12.29c.1-.23.33-.37.58-.34.29.03.58.05.87.05h.04c.35 0 .63.32.51.65A8 8 0 0 1 13 17.94V20h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2.06A8 8 0 0 1 4 10a1 1 0 0 1 2 0 6 6 0 0 0 11.55 2.29Z",
                className: r,
            }),
        ],
    });
};
