"use strict";
n.d(t, { e: () => o });
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
                d: "M19 0a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0V6h-3a1 1 0 1 1 0-2h3V1a1 1 0 0 1 1-1Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M14 2c.11 0 .11.13 0 .17a3 3 0 0 0 .5 5.79c.16.03.28.2.2.34v.03A3 3 0 0 1 9 7V3a1 1 0 0 1 1-1h4Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M21 11.42c0-.16-.2-.25-.33-.15-.48.37-1.07.73-1.67.73-.96 0-2-.5-2.5-1-.3-.3-.53-.63-.8-.93a.28.28 0 0 0-.41 0 4.49 4.49 0 0 1-6.58 0 .28.28 0 0 0-.4 0 4.45 4.45 0 0 1-4.94 1.11c-.17-.07-.37.06-.37.24V19a3 3 0 0 0 3 3h2.75c.14 0 .25-.11.25-.25V16c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5.75c0 .14.11.25.25.25H18a3 3 0 0 0 3-3v-7.58ZM2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v4.03A2.95 2.95 0 0 1 5.03 10h-.05c-2 0-3.44-1.9-2.9-3.83l.55-1.98Z",
                className: u,
            }),
        ],
    });
};
