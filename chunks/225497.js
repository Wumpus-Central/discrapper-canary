"use strict";
n.d(t, { l: () => o });
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
                fill: "string" == typeof l ? l : l.css,
                d: "M10.39 17.4a1 1 0 0 1 0 2h-.92a1 1 0 0 1 0-2h.92Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M7.43 1.98A11 11 0 0 1 22.99 12h.02v7.57s0 .5-.36.5c-.19 0-.62-.5-1-1l.8 2.34a.6.6 0 0 1-.9.72l-1.71-1.16a1.3 1.3 0 0 0-1.48 0 11 11 0 1 1-10.93-19ZM3.68 12.52a.59.59 0 0 0-.6.66 9 9 0 0 0 13.7 6.43.43.43 0 0 0 .19-.36.43.43 0 0 0-.2-.35L9.13 13.7v.02a1.81 1.81 0 1 1-3.15-1.2h-2.3Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
