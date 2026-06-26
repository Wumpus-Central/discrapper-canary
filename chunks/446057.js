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
                d: "M9.02 2.84a1 1 0 0 1 1.97.33L10.2 8h2.1a.7.7 0 0 1 .6.34l.37.6a.7.7 0 0 1-.6 1.06h-2.8l-.67 4h4.97l.41-2.47a.7.7 0 0 1 .91-.54l.6.2c.32.12.5.44.45.77L16.19 14H20a1 1 0 0 1 0 2h-4.16L15 21.17a1 1 0 0 1-1.97-.33l.8-4.84H8.86L8 21.17a1 1 0 0 1-1.97-.33l.8-4.84H3.02a1 1 0 0 1 0-2h4.15l.67-4H4a1 1 0 0 1 0-2h4.15l.86-5.16Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
            (0, i.jsx)("path", {
                fillRule: "evenodd",
                d: "M19 1.61c3.05 0 4.52 2.74 4.93 3.68.1.21.1.44 0 .64-.41.95-1.88 3.68-4.93 3.68-3.04 0-4.51-2.73-4.93-3.68a.78.78 0 0 1 0-.64c.42-.94 1.89-3.68 4.93-3.68Zm0 2.36c0-.33-.28-.61-.6-.52a2.25 2.25 0 1 0 2.87 2.16v-.04c0-.33-.35-.52-.67-.42l-.83.25a.6.6 0 0 1-.77-.57v-.86Z",
                clipRule: "evenodd",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
        ],
    });
};
