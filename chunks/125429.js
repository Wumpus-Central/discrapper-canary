"use strict";
n.d(t, { f: () => o });
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
            d: "M9.35 3A3 3 0 0 0 7.1 4l-5.34 6a3 3 0 0 0 0 4l5.34 6a3 3 0 0 0 2.24 1H20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H9.35Zm1.94 5.3a1 1 0 0 1 1.42 0L15 10.58l2.3-2.3a1 1 0 1 1 1.4 1.42L16.42 12l2.3 2.3a1 1 0 0 1-1.42 1.4L15 13.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L13.58 12l-2.3-2.3a1 1 0 0 1 0-1.4Z",
            clipRule: "evenodd",
            className: u,
        }),
    });
};
