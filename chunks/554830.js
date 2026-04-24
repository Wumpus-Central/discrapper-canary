a.d(t, { K: () => o });
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
            d: "M20.7 12.7a1 1 0 0 0 0-1.4l-8-8a1 1 0 1 0-1.4 1.4l6.29 6.3H4a1 1 0 1 0 0 2h13.59l-6.3 6.3a1 1 0 0 0 1.42 1.4l8-8Z",
            className: d,
        }),
    });
};
