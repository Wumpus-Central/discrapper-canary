a.d(l, { M: () => d });
var s = a(627968);
a(64700);
var c = a(661531),
    h = a(996682),
    i = a(27989);
let d = (e) => {
    let {
            size: l = "md",
            width: a,
            height: d,
            color: t = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: v = "",
            ...r
        } = e,
        n = (0, i.J)(l),
        o = n?.width ?? a,
        p = n?.height ?? d;
    return (0, s.jsxs)("svg", {
        ...(0, h.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, s.jsx)("path", {
                fill: "string" == typeof t ? t : t.css,
                d: "M9 15H8v-4h1v4ZM12 11a1 1 0 0 1 1 1v3h-2v-3a1 1 0 0 1 1-1ZM16 15h-1v-4h1v4Z",
                className: v,
            }),
            (0, s.jsx)("path", {
                fill: "string" == typeof t ? t : t.css,
                fillRule: "evenodd",
                d: "M21.6 4c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2h19.2Zm-9.18 3.15c-.27-.1-.57-.1-.84 0L4.45 9.7a.67.67 0 0 0 .22 1.3H6v4a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-.9-1H18v-4h1.33a.67.67 0 0 0 .22-1.3l-7.13-2.55Z",
                clipRule: "evenodd",
                className: v,
            }),
        ],
    });
};
