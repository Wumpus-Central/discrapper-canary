"use strict";
n.d(t, { b: () => o });
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
                fill: "string" == typeof l ? l : l.css,
                d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM5.97 13.88a1 1 0 0 1-.72 1.21 3 3 0 1 0 2.73 5.16 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 1 18a5 5 0 0 1 3.75-4.84 1 1 0 0 1 1.22.72Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M11.65 17c.43 0 .69.55.54.95-.07.18-.12.36-.15.55-.04.27-.26.5-.54.5H7.73a2 2 0 1 1-1.78-3l3.2-5.9A5 5 0 1 1 17 6a1 1 0 1 1-2 0 3 3 0 1 0-4.12 2.78 1 1 0 0 1 .5 1.4L7.7 16.96l.02.05h3.92Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M17.12 12.66c.23-.18.32-.52.15-.76L13.8 6.86A2 2 0 1 0 12.16 8l3.52 5.13c.23.33.75.28 1-.03.14-.16.28-.3.44-.43Z",
                className: u,
            }),
        ],
    });
};
