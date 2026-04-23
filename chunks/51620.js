a.d(l, { g: () => c });
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
    return (0, t.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            d: "M12.7 20.7a1 1 0 0 1-1.4 0l-8-8a1 1 0 1 1 1.4-1.4l6.3 6.29V4a1 1 0 1 1 2 0v13.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-8 8Z",
            className: r,
        }),
    });
};
