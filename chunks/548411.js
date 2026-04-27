"use strict";
n.d(t, { Z: () => s });
var r = n(627968);
n(64700);
var i = n(661531),
    a = n(996682),
    l = n(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: n,
            height: s,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
        } = e,
        d = (0, l.J)(t),
        _ = d?.width ?? n,
        p = d?.height ?? s;
    return (0, r.jsx)("svg", {
        ...(0, a.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M3.3 11.3a1 1 0 0 0 0 1.4l8 8a1 1 0 1 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l6.3-6.3a1 1 0 0 0-1.42-1.4l-8 8Z",
            className: c,
        }),
    });
};
