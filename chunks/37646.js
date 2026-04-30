"use strict";
n.d(t, { U: () => o });
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
                d: "M11 2a1 1 0 1 0-2 0v1H3a1 1 0 0 0 0 2h9.94a8.04 8.04 0 0 1-2.76 5.11l-.14.12-.2-.16a7.9 7.9 0 0 1-2.38-3.4 1 1 0 1 0-1.88.67 9.9 9.9 0 0 0 2.92 4.21l-3.15 2.69a1 1 0 0 0 1.3 1.52l3.4-2.91 1.31 1.08a1 1 0 1 0 1.28-1.53l-1.04-.87c1.9-1.68 3.1-4.02 3.35-6.53H17a1 1 0 1 0 0-2h-6V2Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M22.77 22H20.5l-.99-2.77H14.3L13.3 22h-2.27l4.72-12.42h2.3L22.77 22ZM16.9 11.87l-1.92 5.43h3.85l-1.93-5.43Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
