s.d(t, { x: () => l });
var i = s(627968);
s(64700);
var c = s(661531),
    r = s(996682),
    n = s(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: s,
            height: l,
            color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = e,
        g = (0, n.J)(t),
        u = g?.width ?? s,
        v = g?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, r.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                className: a,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                fillRule: "evenodd",
                d: "M7.17 4.66A3 3 0 0 1 9.85 3h4.3a3 3 0 0 1 2.68 1.66c.34.69.94 1.34 1.71 1.34H20a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1.46c.77 0 1.37-.65 1.71-1.34ZM17 13a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
                clipRule: "evenodd",
                className: a,
            }),
        ],
    });
};
