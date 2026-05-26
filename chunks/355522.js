l.d(t, { M: () => a });
var i = l(627968);
l(64700);
var r = l(661531),
    c = l(996682),
    n = l(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: l,
            height: a,
            color: s = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...d
        } = e,
        u = (0, n.J)(t),
        v = u?.width ?? l,
        o = u?.height ?? a;
    return (0, i.jsxs)("svg", {
        ...(0, c.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M9 15H8v-4h1v4ZM12 11a1 1 0 0 1 1 1v3h-2v-3a1 1 0 0 1 1-1ZM16 15h-1v-4h1v4Z",
                className: h,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                fillRule: "evenodd",
                d: "M21.6 4c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2h19.2Zm-9.18 3.15c-.27-.1-.57-.1-.84 0L4.45 9.7a.67.67 0 0 0 .22 1.3H6v4a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-.9-1H18v-4h1.33a.67.67 0 0 0 .22-1.3l-7.13-2.55Z",
                clipRule: "evenodd",
                className: h,
            }),
        ],
    });
};
