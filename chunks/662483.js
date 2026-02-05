"use strict";
n.d(t, { p: () => o });
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
            fillRule: "evenodd",
            d: "M15.9 2.17c0-1.22 1.65-1.63 2.22-.54l1.2 2.3c.17.32.43.57.75.74l2.3 1.21c1.08.57.68 2.21-.55 2.21h-3.27c-.11 0-.2.06-.26.14a7.35 7.35 0 0 1-10.2 9.99v3.6c0 1.23-1.64 1.64-2.2.55l-1.22-2.3a1.76 1.76 0 0 0-.74-.74l-2.3-1.21c-1.09-.57-.68-2.21.54-2.21h3.61a7.35 7.35 0 0 1 9.99-10.2.31.31 0 0 0 .13-.26V2.17Zm-2.02 5.31c-.1-.8-1.15-1.32-2.34-1.17-1.2.14-2.09.9-1.99 1.7.1.8 1.15 1.32 2.34 1.18 1.2-.15 2.08-.91 1.99-1.7Z",
            clipRule: "evenodd",
            className: u,
        }),
    });
};
