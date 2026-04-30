"use strict";
n.d(t, { Z: () => o });
var i = n(627968);
n(64700);
var r = n(661531),
    s = n(996682),
    a = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: l = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, a.J)(t),
        _ = d?.width ?? n,
        f = d?.height ?? o;
    return (0, i.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M3.3 11.3a1 1 0 0 0 0 1.4l8 8a1 1 0 1 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l6.3-6.3a1 1 0 0 0-1.42-1.4l-8 8Z",
            className: u,
        }),
    });
};
