t.d(s, { Y: () => r });
var a = t(627968);
t(64700);
var n = t(827734),
    l = t(996682),
    i = t(27989);
let r = (e) => {
    let {
            size: s = "md",
            width: t,
            height: r,
            color: o = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...m
        } = e,
        d = (0, i.J)(s),
        u = d?.width ?? t,
        h = d?.height ?? r;
    return (0, a.jsx)("svg", {
        ...(0, l.A)(m),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
            className: c,
        }),
    });
};
