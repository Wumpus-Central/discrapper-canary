"use strict";
a.d(t, { T: () => s });
var r = a(627968);
a(64700);
var i = a(827734),
    n = a(996682),
    l = a(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: a,
            height: s,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, l.J)(t),
        _ = u?.width ?? a,
        p = u?.height ?? s;
    return (0, r.jsx)("svg", {
        ...(0, n.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z",
            className: c,
        }),
    });
};
