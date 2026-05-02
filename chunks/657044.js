n.d(e, { _: () => o });
var s = n(627968);
n(64700);
var i = n(661531),
    a = n(996682),
    l = n(27989);
let o = (t) => {
    let {
            size: e = "md",
            width: n,
            height: o,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = t,
        C = (0, l.J)(e),
        d = C?.width ?? n,
        E = C?.height ?? o;
    return (0, s.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, s.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M6.69 2A3 3 0 0 0 3.7 4.67l-.33 3A3 3 0 0 0 6.35 11H7V9a1 1 0 0 1 2 0v2h6V9a1 1 0 1 1 2 0v2h.65a3.05 3.05 0 0 0 .9-.14 3 3 0 0 0 2.08-3.2l-.33-3A3 3 0 0 0 17.3 2H6.7Z",
                className: u,
            }),
            (0, s.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                fillRule: "evenodd",
                d: "M15 13v1a1 1 0 1 0 2 0v-1h.65c1.43 0 2.72-.6 3.62-1.56l.04.22.68 5.88A4 4 0 0 1 18 22H6A4 4 0 0 1 2 17.54l.68-5.88.04-.22c.9.96 2.19 1.56 3.62 1.56H7v1a1 1 0 1 0 2 0v-1h6Zm-6 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
