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
    return (0, r.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M12.7 3.3a1 1 0 0 0-1.4 0l-8 8a1 1 0 1 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l6.3 6.3a1 1 0 0 0 1.4-1.42l-8-8Z",
            className: u,
        }),
    });
};
