"use strict";
n.d(t, { W: () => o });
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
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M3 15.5V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v.5a.5.5 0 0 1-.5.5H17a4 4 0 0 0-4 4v4.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5ZM12.5 18H2a1 1 0 1 0 0 2h10.48c.33 0 .57-.3.54-.63A4.08 4.08 0 0 1 13 19v-.5a.5.5 0 0 0-.5-.5Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M15 11c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8Zm2 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
