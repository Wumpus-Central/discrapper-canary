"use strict";
n.d(t, { k: () => o });
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
                d: "M22.24 13.2c.33.1.71-.1.73-.44A11 11 0 1 0 2.91 18.2c.34.5 1.05.51 1.46.07l.02-.02c.33-.36.34-.91.07-1.33a9 9 0 1 1 16.49-3.98c0 .03.02.06.05.06a4 4 0 0 1 1.24.2Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M12.59 16.03c.28.03.46.3.43.59L13 17v4a4 4 0 0 0 .2 1.24c.1.33-.1.71-.44.73a11.17 11.17 0 0 1-5.62-1.1 1.52 1.52 0 0 1-.8-1.84 6 6 0 0 1 6.25-4ZM18.98 12.57a.48.48 0 0 1-.48.43H17a.08.08 0 0 1-.08-.1 5 5 0 1 0-9.53 1.04c.18.42.14.9-.17 1.23l-.05.06c-.43.47-1.18.42-1.45-.14a7 7 0 1 1 13.26-2.52Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M17 15a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4Zm1 1.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm0 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
