i.d(t, { o: () => r });
var l = i(627968);
i(64700);
var e = i(661531),
    h = i(996682),
    a = i(27989);
let r = (s) => {
    let {
            size: t = "md",
            width: i,
            height: r,
            color: c = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...w
        } = s,
        o = (0, a.J)(t),
        n = o?.width ?? i,
        p = o?.height ?? r;
    return (0, l.jsx)("svg", {
        ...(0, h.A)(w),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: d,
        }),
    });
};
