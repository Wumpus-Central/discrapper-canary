a.d(t, { o: () => s });
var n = a(627968);
a(64700);
var l = a(661531),
    r = a(996682),
    i = a(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: a,
            height: s,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, i.J)(t),
        h = u?.width ?? a,
        p = u?.height ?? s;
    return (0, n.jsx)("svg", {
        ...(0, r.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: c,
        }),
    });
};
