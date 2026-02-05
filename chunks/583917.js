"use strict";
n.d(t, { d: () => o });
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
                d: "M12 10a2 2 0 0 1-2.75 1.85c-.12-.04-.25.03-.25.15a3 3 0 1 0 3-3c-.12 0-.2.13-.15.25A2 2 0 0 1 12 10Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Zm6.85-9.65C18.3 13.48 16.27 17 12 17s-6.3-3.52-6.85-4.65a.8.8 0 0 1 0-.7C5.7 10.52 7.73 7 12 7s6.3 3.52 6.85 4.65c.1.22.1.48 0 .7Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
