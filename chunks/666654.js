e.d(l, { O: () => h });
var a = e(627968);
e(64700);
var t = e(661531),
    i = e(996682),
    c = e(27989);
let h = (s) => {
    let {
            size: l = "md",
            width: e,
            height: h,
            color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...A
        } = s,
        d = (0, c.J)(l),
        o = d?.width ?? e,
        g = d?.height ?? h;
    return (0, a.jsxs)("svg", {
        ...(0, i.A)(A),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, a.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                fillRule: "evenodd",
                d: "M21.76.83a5.02 5.02 0 0 1 .78 7.7 5 5 0 0 1-7.07 0 5.02 5.02 0 0 1 0-7.07 5 5 0 0 1 6.29-.63Zm-4.88 2.05a3 3 0 0 1 3.41-.59l-4 4a3 3 0 0 1 .59-3.41Zm4.83.83-4 4a3 3 0 0 0 4-4Z",
                clipRule: "evenodd",
                className: n,
            }),
            (0, a.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M12 2c.33 0 .51.35.4.66a6.99 6.99 0 0 0 3.04 8.37c.2.12.31.37.21.6A4 4 0 0 1 8 10V6a4 4 0 0 1 4-4Z",
                className: n,
            }),
            (0, a.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M17.55 12.29c.1-.23.33-.37.58-.34.29.03.58.05.87.05h.04c.35 0 .63.32.51.65A8 8 0 0 1 13 17.94V20h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2.06A8 8 0 0 1 4 10a1 1 0 0 1 2 0 6 6 0 0 0 11.55 2.29Z",
                className: n,
            }),
        ],
    });
};
