"use strict";
n.d(t, { B: () => o });
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
                d: "M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v1H1V6Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M1 10h22v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-8Zm4 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Zm-1 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm13-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
