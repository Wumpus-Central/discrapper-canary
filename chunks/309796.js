"use strict";
n.d(t, { _: () => o });
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
                d: "M13.63 2.45a1.23 1.23 0 0 1 2.39.61l-1.91 8.17.67.26 2.78-7.4a1.17 1.17 0 0 1 2.2.75l-2.12 6.78c-.1.34-.4.6-.73.7a7 7 0 0 0-4.42 9.24c.16.41-.09.89-.53.89a7.47 7.47 0 0 1-7.14-5.28l-1.26-4.11a2.1 2.1 0 0 0-.16-.37l-1.33-2.5a.61.61 0 0 1 .05-.65c.43-.6 1.24-.8 1.9-.47l.33.16c.82.4 1.47 1.08 1.85 1.9l.66 1.49c.18.38.74.3.8-.1l.49-3 1.07-6.85a1.26 1.26 0 0 1 2.49.34l-.83 6.97.6.23 2.15-7.76Zm6.1 6.38a1.19 1.19 0 0 1 2.17.96l-.7 1.66c-.2.46-.7.7-1.2.62a7 7 0 0 0-1-.07c-.33 0-.58-.34-.44-.65l1.17-2.52Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
            (0, i.jsx)("path", {
                fillRule: "evenodd",
                d: "M15.46 15.46a5 5 0 0 1 7.07 0 5 5 0 0 1-7.07 7.07 5 5 0 0 1 0-7.07Zm2.25 6.25a3 3 0 0 0 4-4l-4 4Zm2.58-5.42a3 3 0 0 0-4 4l4-4Z",
                clipRule: "evenodd",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
        ],
    });
};
