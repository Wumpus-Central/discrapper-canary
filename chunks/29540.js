"use strict";
n.d(t, { u: () => o });
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
        h = d?.height ?? o;
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M17.5 3a4 4 0 0 1 4 4v.53c0 .27-.23.47-.5.47a4 4 0 0 0-3.97 3.5c-.03.28-.25.5-.53.5h-9c-.28 0-.5-.22-.53-.5A4 4 0 0 0 3 8c-.27 0-.5-.2-.5-.47V7a4 4 0 0 1 4-4h11Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M21 10a2 2 0 0 1 2 2v5a2 2 0 0 1-1.8 1.99l.04.1a1.4 1.4 0 0 1-2.6 1.04l-.32-.82a.5.5 0 0 0-.46-.31H6.14a.5.5 0 0 0-.46.31l-.33.82a1.4 1.4 0 0 1-2.59-1.04l.04-.1a2 2 0 0 1-1.79-1.79L1 17v-5a2 2 0 1 1 4 0v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1c0-1.1.9-2 2-2Z",
                className: u,
            }),
        ],
    });
};
