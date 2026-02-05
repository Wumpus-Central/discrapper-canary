"use strict";
n.d(t, { D: () => o });
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
                fillRule: "evenodd",
                d: "M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h7.73c.12 0 .16-.26.05-.31A2.88 2.88 0 0 1 12 19a3 3 0 0 1 3-3h6.4c.2 0 .39-.11.45-.3a3 3 0 0 0 .15-.94V6a4 4 0 0 0-4-4ZM6.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                clipRule: "evenodd",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
            (0, r.jsx)("path", {
                d: "M15 18a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
        ],
    });
};
