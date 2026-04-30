"use strict";
n.d(t, { R: () => o });
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
                d: "M10.55 4.4c.13-.24.1-.54-.12-.71L8.6 2.24a1 1 0 0 0-1.24 0l-4 3.15a1 1 0 0 0-.38.79v4.03c0 .43.5.66.82.39l2.28-1.9a3 3 0 0 1 3.84 0c.03.02.08 0 .08-.04V6.42a4 4 0 0 1 .55-2.02ZM7.36 10.23a1 1 0 0 1 1.28 0l1.18.99 2.98 2.48 1.84 1.53a1 1 0 0 1-.67 1.77.1.1 0 0 0-.1.09l-.23 3.06a2 2 0 0 1-2 1.85H4.36a2 2 0 0 1-2-1.85l-.24-3.16a1 1 0 0 1-.76-1.76l6-5Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M12 10.2c0 .14.07.28.18.38l3.74 3.12a3 3 0 0 1 .03 4.58.55.55 0 0 0-.2.37l-.12 1.65a4 4 0 0 1-.17.9c-.12.38.13.8.52.8H20a2 2 0 0 0 2-2V3.61a1.5 1.5 0 0 0-2-1.41l-6.66 2.33A2 2 0 0 0 12 6.42",
                className: u,
            }),
        ],
    });
};
