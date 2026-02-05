"use strict";
n.d(t, { m: () => o });
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
            d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM6.85 13.15a.5.5 0 0 1-.85-.36V3a1 1 0 0 1 2 0v8.8a.5.5 0 0 1-.15.35l-1 1ZM11 17.2v.8a1 1 0 1 0 2 0v-1.8a.5.5 0 0 0-.85-.35l-1 1a.5.5 0 0 0-.15.36ZM11 7.8V6a1 1 0 1 1 2 0v.8a.5.5 0 0 1-.15.35l-1 1a.5.5 0 0 1-.85-.36ZM17.15 10.85a.5.5 0 0 1 .85.36V19a1 1 0 1 1-2 0v-6.8a.5.5 0 0 1 .15-.35l1-1ZM2 7a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1ZM21 9a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0V9Z",
            className: u,
        }),
    });
};
