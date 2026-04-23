"use strict";
r.d(t, { K: () => l });
var i = r(627968);
r(64700);
var n = r(827734),
    s = r(996682),
    a = r(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: r,
            height: l,
            color: c = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
        } = e,
        u = (0, a.J)(t),
        p = u?.width ?? r,
        _ = u?.height ?? l;
    return (0, i.jsx)("svg", {
        ...(0, s.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            fillRule: "evenodd",
            d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
            clipRule: "evenodd",
            className: o,
        }),
    });
};
