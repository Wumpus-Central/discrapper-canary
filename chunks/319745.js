"use strict";
l.d(t, { Z: () => i });
var a = l(627968);
l(64700);
var n = l(827734),
    r = l(996682),
    s = l(27989);
let i = (e) => {
    let {
            size: t = "md",
            width: l,
            height: i,
            color: o = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, s.J)(t),
        _ = u?.width ?? l,
        m = u?.height ?? i;
    return (0, a.jsx)("svg", {
        ...(0, r.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z",
            className: d,
        }),
    });
};
