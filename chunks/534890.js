n.d(t, { o: () => o });
var a = n(627968);
n(64700);
var i = n(661531),
    l = n(996682),
    r = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: s = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, r.J)(t),
        _ = u?.width ?? n,
        p = u?.height ?? o;
    return (0, a.jsx)("svg", {
        ...(0, l.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: c,
        }),
    });
};
