"use strict";
n.d(t, { i: () => o });
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
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M16.7 8.7a1 1 0 0 0-1.4-1.4l-3.26 3.24a1 1 0 0 0 1.42 1.42L16.7 8.7ZM3.7 11.3a1 1 0 0 0-1.4 1.4l4.5 4.5a1 1 0 0 0 1.4-1.4l-4.5-4.5Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M21.7 9.7a1 1 0 0 0-1.4-1.4L13 15.58l-3.3-3.3a1 1 0 0 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l8-8Z",
                className: u,
            }),
        ],
    });
};
