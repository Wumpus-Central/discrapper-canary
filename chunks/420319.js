"use strict";
n.d(t, { T: () => o });
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
    return (0, r.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M2 11a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2ZM2 19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4ZM3 10a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1ZM22 7a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V7ZM2 4c0-1.1.9-2 2-2a1 1 0 1 1 0 2 1 1 0 0 1-2 0ZM20 2a1 1 0 1 0 0 2 1 1 0 1 0 2 0 2 2 0 0 0-2-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM14 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z",
            className: u,
        }),
    });
};
