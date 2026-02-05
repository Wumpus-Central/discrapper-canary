"use strict";
n.d(t, { a: () => o });
var r = n(627968);
n(64700);
var i = n(827734),
    a = n(996682),
    s = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, s.J)(t),
        _ = d?.width ?? n,
        f = d?.height ?? o;
    return (0, r.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M4.13 12.02a4 4 0 0 1 5.48-4.68A5.1 5.1 0 0 1 14 5c2.61 0 4.75 1.8 4.98 4.1A5 5 0 0 1 18 19H4.5a3.5 3.5 0 0 1-.37-6.98Z",
            className: u,
        }),
    });
};
