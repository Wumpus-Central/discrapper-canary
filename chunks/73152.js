"use strict";
n.d(t, { E: () => o });
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
    return (0, r.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, r.jsx)("path", {
                d: "M11.8 3.75a5.98 5.98 0 0 1 8.98 7.85 1 1 0 0 1-1.6-1.21 3.98 3.98 0 0 0-5.97-5.22l-2.51 2.5a1 1 0 1 1-1.42-1.4l2.52-2.52ZM7.68 9.28a1 1 0 0 1 0 1.42L5.17 13.2a3.98 3.98 0 0 0 5.22 5.98 1 1 0 1 1 1.21 1.59 5.98 5.98 0 0 1-7.85-8.98l2.52-2.52a1 1 0 0 1 1.4 0Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
            (0, r.jsx)("path", {
                d: "M14.7 10.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 1 0 1.4 1.4l4-4ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
        ],
    });
};
