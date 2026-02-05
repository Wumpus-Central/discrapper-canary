"use strict";
n.d(t, { g: () => o });
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
                d: "M8.3 6.3a1 1 0 0 1 1.4 0L12 8.58l2.3-2.3a1 1 0 1 1 1.4 1.42L13.42 10l2.3 2.3a1 1 0 0 1-1.42 1.4L12 11.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 10l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8Zm3 18a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
