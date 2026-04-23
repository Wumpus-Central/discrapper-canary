"use strict";
n.d(t, { N: () => s });
var a = n(627968);
n(64700);
var i = n(827734),
    r = n(996682),
    l = n(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: n,
            height: s,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = e,
        u = (0, l.J)(t),
        _ = u?.width ?? n,
        m = u?.height ?? s;
    return (0, a.jsx)("svg", {
        ...(0, r.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z",
            clipRule: "evenodd",
            className: o,
        }),
    });
};
