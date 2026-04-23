a.d(t, { Y: () => s });
var n = a(627968);
a(64700);
var r = a(827734),
    i = a(996682),
    l = a(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: a,
            height: s,
            color: _ = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
        } = e,
        c = (0, l.J)(t),
        u = c?.width ?? a,
        h = c?.height ?? s;
    return (0, n.jsx)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof _ ? _ : _.css,
            d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
            className: o,
        }),
    });
};
