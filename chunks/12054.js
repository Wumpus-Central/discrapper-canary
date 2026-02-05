"use strict";
n.d(t, { y: () => o });
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
            fillRule: "evenodd",
            d: "M11.62 2.08a1 1 0 0 1 1.09.21l5 5a1 1 0 0 1-.09 1.5L13.6 12l4.02 3.22a1 1 0 0 1 .09 1.49l-5 5A1 1 0 0 1 11 21v-6.92l-3.38 2.7a1 1 0 0 1-1.24-1.56L10.4 12 6.38 8.78a1 1 0 0 1 1.24-1.56L11 9.92V3a1 1 0 0 1 .62-.92Zm1.38 12 2.5 2-2.5 2.5v-4.5Zm0-4.16v-4.5l2.5 2.5-2.5 2Z",
            clipRule: "evenodd",
            className: u,
        }),
    });
};
