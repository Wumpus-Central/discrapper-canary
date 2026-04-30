n.d(t, { g: () => a });
var l = n(627968);
n(64700);
var i = n(661531),
    s = n(996682),
    r = n(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, r.J)(t),
        h = u?.width ?? n,
        g = u?.height ?? a;
    return (0, l.jsx)("svg", {
        ...(0, s.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M15 4v3.59l5.3-5.3a1 1 0 1 1 1.4 1.42L16.42 9H20a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0ZM9 16.41l-5.3 5.3a1 1 0 0 1-1.4-1.42L7.58 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.59Z",
            className: c,
        }),
    });
};
