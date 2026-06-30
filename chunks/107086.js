"use strict";
n.d(t, { s: () => o });
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
                d: "M1.59 3.78c.22-.66.98-.97 1.6-.66.48.24.73.79.65 1.32-.26 2 .1 4.32.88 6.18.66 1.56 2.35 2.25 4.04 2.25h.5a6.5 6.5 0 0 1 6.5 6.5c0 .9-.73 1.63-1.63 1.63a.11.11 0 0 1-.1-.09 5.62 5.62 0 0 0-1.05-2.03c-.15-.19-.42-.06-.39.18l.21 1.66c.02.15-.1.28-.25.28h-6.8a2 2 0 0 1-2-2v-.46c0-1.56-.67-3.02-1.4-4.4-1.27-2.44-1.7-5.8-1.01-9.57.01-.08.03-.16.06-.23l.19-.56ZM15.76 11.99 16 12h3.27c.65 0 1.3.2 1.75.66a6.62 6.62 0 0 1 1.46 2.21c.34.89.47 1.71.5 2.38.06.93-.75 1.58-1.69 1.57l-2.62-.03a1.1 1.1 0 0 1-1.04-.94 8.39 8.39 0 0 0-2.97-5.09c-.6-.49.33-.83 1.1-.77Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M8.7 4.87a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M19 1a2.5 2.5 0 0 1 2.5 2.5V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h.5v-.5A2.5 2.5 0 0 1 19 1Zm0 1.5a1 1 0 0 0-1 1V4h2v-.5a1 1 0 0 0-1-1Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
