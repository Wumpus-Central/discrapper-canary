a.d(t, { m: () => o });
var r = a(627968);
a(64700);
var n = a(661531),
    i = a(996682),
    l = a(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: a,
            height: o,
            color: s = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, l.J)(t),
        p = u?.width ?? a,
        m = u?.height ?? o;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
            className: d,
        }),
    });
};
