"use strict";
n.d(t, { X: () => o });
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
                d: "m7.7 16.95 3.68-6.76a1 1 0 0 0-.5-1.4A3 3 0 1 1 15 6a1 1 0 1 0 2 0 5 5 0 1 0-7.85 4.1L5.95 16a2 2 0 1 0 1.78 3h8.54a2 2 0 1 0 0-2H7.73l-.02-.05Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M13.8 6.86A2 2 0 1 0 12.16 8l4.53 6.58a1 1 0 0 0 .82.43h.5a3 3 0 1 1-1.98 5.25 1 1 0 0 0-.66-.25h-.01a1 1 0 0 0-.66 1.75A4.98 4.98 0 0 0 23 18a5 5 0 0 0-4.97-5L13.8 6.86ZM5.97 13.88a1 1 0 0 1-.72 1.21 3 3 0 1 0 2.73 5.16 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 1 18a5 5 0 0 1 3.75-4.84 1 1 0 0 1 1.22.72Z",
                className: u,
            }),
        ],
    });
};
