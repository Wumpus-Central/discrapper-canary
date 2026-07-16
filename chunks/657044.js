l.d(t, { _: () => r });
var a = l(627968);
l(64700);
var s = l(661531),
    i = l(996682),
    n = l(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: l,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        h = (0, n.J)(t),
        E = h?.width ?? l,
        p = h?.height ?? r;
    return (0, a.jsxs)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: E,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, a.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M6.69 2A3 3 0 0 0 3.7 4.67l-.33 3A3 3 0 0 0 6.35 11H7V9a1 1 0 0 1 2 0v2h6V9a1 1 0 1 1 2 0v2h.65a3.05 3.05 0 0 0 .9-.14 3 3 0 0 0 2.08-3.2l-.33-3A3 3 0 0 0 17.3 2H6.7Z",
                className: c,
            }),
            (0, a.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M15 13v1a1 1 0 1 0 2 0v-1h.65c1.43 0 2.72-.6 3.62-1.56l.04.22.68 5.88A4 4 0 0 1 18 22H6A4 4 0 0 1 2 17.54l.68-5.88.04-.22c.9.96 2.19 1.56 3.62 1.56H7v1a1 1 0 1 0 2 0v-1h6Zm-6 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                clipRule: "evenodd",
                className: c,
            }),
        ],
    });
};
