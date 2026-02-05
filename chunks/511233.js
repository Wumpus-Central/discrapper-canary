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
                d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h2.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V4a3 3 0 0 0-3-3H8ZM18 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M14 10a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-6Zm5.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM18 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
