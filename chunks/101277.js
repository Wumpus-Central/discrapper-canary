"use strict";
n.d(t, { P: () => o });
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
        h = d?.height ?? o;
    return (0, i.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M13 7.83a3 3 0 1 0-2 0V11H8a4 4 0 0 0-4 4v1.17a3 3 0 1 0 2 0V15c0-1.1.9-2 2-2h3v3.17a3 3 0 1 0 2 0V13h3a2 2 0 0 1 2 2v1.17a3 3 0 1 0 2 0V15a4 4 0 0 0-4-4h-3V7.83Z",
            className: u,
        }),
    });
};
