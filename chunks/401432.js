"use strict";
n.d(t, { a: () => o });
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
    return (0, i.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M16.94 19.06a1.5 1.5 0 1 0 2.12-2.12L14.12 12l4.94-4.94a1.5 1.5 0 1 0-2.12-2.12L12 9.88 7.06 4.94a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-4.94 4.94a1.5 1.5 0 1 0 2.12 2.12L12 14.12l4.94 4.94Z",
            className: u,
        }),
    });
};
