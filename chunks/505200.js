l.d(t, { A: () => r });
var n = l(627968);
l(64700);
var i = l(661531),
    s = l(996682),
    a = l(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: l,
            height: r,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
        } = e,
        u = (0, a.J)(t),
        m = u?.width ?? l,
        h = u?.height ?? r;
    return (0, n.jsx)("svg", {
        ...(0, s.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "m12.5 20.96-1.02-2.58 9.92.5-.45 4.12-8.45-2.04ZM14.88 1 1 7.39 3.15 17h2.83l-.5-6.88.44-.13L7.62 17h2.95l-.11-8.38.43-.13 1.49 8.52h3.11l.74-10.14.43-.13.77 10.27h4.12L23 2.92 14.88 1Z",
            className: o,
        }),
    });
};
