"use strict";
n.d(t, { I: () => o });
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
                d: "M12.2 22c.5-.01.67-.84.37-1.24A3 3 0 0 1 15 16h5.84c.2 0 .38-.12.46-.3a10 10 0 1 0-17.74 1.66c.12.19.1.44-.04.61l-2.07 2.37A1 1 0 0 0 2.2 22h10Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
            (0, r.jsx)("path", {
                d: "M15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
        ],
    });
};
