"use strict";
n.d(t, { n: () => o });
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
                d: "M19 3.5c.08 0 .12.1.09.17a.94.94 0 0 0 1.24 1.25c.07-.04.17 0 .17.08A1.5 1.5 0 1 1 19 3.5Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M19 1.25c2.96 0 4.28 2.96 4.54 3.62.03.09.03.17 0 .26-.26.66-1.58 3.62-4.54 3.62h-.27c-2.77-.18-4.02-2.98-4.27-3.62a.35.35 0 0 1 0-.26c.26-.66 1.58-3.62 4.54-3.62Zm0 1.25c-1.01 0-1.77.5-2.35 1.14-.42.48-.71 1-.88 1.36.17.35.46.88.88 1.36A3.08 3.08 0 0 0 19 7.5c1.01 0 1.77-.5 2.35-1.14.42-.48.71-1 .88-1.36a5.81 5.81 0 0 0-.88-1.36A3.08 3.08 0 0 0 19 2.5ZM9.01 2.84a1 1 0 0 1 1.98.32L10.19 8h3.12c.31 0 .6.15.8.4l.11.11A6.98 6.98 0 0 0 16.05 10c.42.22.68.67.6 1.14L16.19 14H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86l-.86 5.16A1 1 0 0 1 6 20.84l.8-4.84H3a1 1 0 0 1 0-2h4.15l.67-4H4a1 1 0 0 1 0-2h4.15l.86-5.16ZM9.18 14h4.97l.67-4H9.85l-.67 4Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
