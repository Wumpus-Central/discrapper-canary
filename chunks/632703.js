a.d(l, { D: () => c });
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
                d: "M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h7.73c.12 0 .16-.26.05-.31A2.88 2.88 0 0 1 12 19a3 3 0 0 1 3-3h6.4c.2 0 .39-.11.45-.3a3 3 0 0 0 .15-.94V6a4 4 0 0 0-4-4ZM6.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                clipRule: "evenodd",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
            (0, t.jsx)("path", {
                d: "M15 18a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
        ],
    });
};
