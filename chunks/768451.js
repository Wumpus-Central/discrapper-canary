l.d(t, { d: () => r });
var n = l(627968);
l(64700);
var s = l(661531),
    i = l(996682),
    a = l(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: l,
            height: r,
            color: u = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        o = (0, a.J)(t),
        f = o?.width ?? l,
        h = o?.height ?? r;
    return (0, n.jsxs)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: f,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                fillRule: "evenodd",
                d: "M22 4v1.51a6 6 0 0 1-1.76 4.25l-4.1 4.1a.5.5 0 0 0-.14.35v1.29a.5.5 0 0 1-.5.5H15a3 3 0 0 0-3 3c0 .21-.3.26-.36.07l-.8-2.17a.5.5 0 0 0-.12-.18l-3.46-3.46a.5.5 0 0 0-.17-.11l-4.8-1.85a.5.5 0 0 1-.15-.85l2.02-1.73A3 3 0 0 1 6.1 8h3.68a.5.5 0 0 0 .36-.15l4.1-4.1A6 6 0 0 1 18.48 2H20a2 2 0 0 1 2 2Zm-5 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                clipRule: "evenodd",
                className: d,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                d: "M9 19a1 1 0 0 0-1-1H7a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1 3 3 0 0 0-3 3v3a1 1 0 0 0 1 1h3a3 3 0 0 0 3-3ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                className: d,
            }),
        ],
    });
};
