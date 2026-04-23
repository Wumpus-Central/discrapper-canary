a.d(l, { I: () => c });
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
                d: "M12.2 22c.5-.01.67-.84.37-1.24A3 3 0 0 1 15 16h5.84c.2 0 .38-.12.46-.3a10 10 0 1 0-17.74 1.66c.12.19.1.44-.04.61l-2.07 2.37A1 1 0 0 0 2.2 22h10Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
            (0, t.jsx)("path", {
                d: "M15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
        ],
    });
};
