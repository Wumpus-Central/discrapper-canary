"use strict";
n.d(t, { z: () => o });
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
            d: "m11.33 14.83-2.16-2.16a1 1 0 0 1-.25-.99l.75-2.57A3 3 0 0 1 11 7.4l8.05-4.91a1.8 1.8 0 0 1 2.47 2.47L16.61 13a3 3 0 0 1-1.72 1.32l-2.57.75a1 1 0 0 1-.99-.25ZM8.74 13.57c-.2-.2-.44-.36-.7-.43a4 4 0 0 0-5 4.42C3.14 18.23 2.68 19 2 19a1 1 0 1 0 0 2h5a4 4 0 0 0 3.86-5.03c-.07-.27-.23-.51-.43-.7l-1.7-1.7ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
            className: u,
        }),
    });
};
