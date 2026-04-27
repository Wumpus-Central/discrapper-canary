"use strict";
r.d(t, { o: () => l });
var n = r(627968);
r(64700);
var i = r(661531),
    a = r(996682),
    s = r(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: r,
            height: l,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, s.J)(t),
        _ = u?.width ?? r,
        p = u?.height ?? l;
    return (0, n.jsx)("svg", {
        ...(0, a.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
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
