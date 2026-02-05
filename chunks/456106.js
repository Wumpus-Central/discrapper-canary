"use strict";
n.d(t, { O: () => o });
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
                d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7.28c.2 0 .39-.13.46-.32l.76-2a.5.5 0 0 0-.47-.68H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0l.42.56.15-.4A2 2 0 0 1 17.79 12h2.32c.57 0 1.09.24 1.46.64.11.12.43.04.43-.13V5a3 3 0 0 0-3-3H5Zm3.65 3.08c.67-.65 1.78-.01 1.55.9-.12.49.17.98.65 1.12.9.26.9 1.54 0 1.8a.93.93 0 0 0-.65 1.12c.23.91-.88 1.55-1.55.9a.93.93 0 0 0-1.3 0c-.67.65-1.78.01-1.55-.9a.93.93 0 0 0-.65-1.12c-.9-.26-.9-1.54 0-1.8a.93.93 0 0 0 .65-1.12c-.23-.91.88-1.55 1.55-.9.36.35.94.35 1.3 0Z",
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                clipRule: "evenodd",
                className: u,
            }),
            (0, r.jsx)("path", {
                d: "M21.61 24.04h2.3L20.11 14H17.8l-3.8 10.04h2.3l.65-1.92h4.02l.65 1.92Zm-4-3.84 1.34-3.92 1.34 3.92H17.6Z",
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
