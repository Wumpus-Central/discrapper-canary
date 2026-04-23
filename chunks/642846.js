"use strict";
a.d(t, { Y: () => l });
var r = a(627968);
a(64700);
var i = a(827734),
    n = a(996682),
    s = a(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: a,
            height: l,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        _ = (0, s.J)(t),
        u = _?.width ?? a,
        h = _?.height ?? l;
    return (0, r.jsx)("svg", {
        ...(0, n.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
            className: d,
        }),
    });
};
