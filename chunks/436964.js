"use strict";
n.d(t, { w: () => o });
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
            d: "M7.3 2.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1-1.4 1.4L9 5.42V11a7 7 0 0 0 7 7h4a1 1 0 1 1 0 2h-4a9 9 0 0 1-9-9V5.41l-3.3 3.3a1 1 0 0 1-1.4-1.42l5-5Z",
            className: u,
        }),
    });
};
