"use strict";
n.d(t, { H: () => o });
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
                d: "M15.7 12a5.6 5.6 0 0 1 5.67 5.5c0 .57-.09 1.14-.27 1.69-.1.32-.09.67.1.95l.83 1.32A1 1 0 0 1 21.2 23h-5.5a5.6 5.6 0 0 1-5.68-5.5 5.6 5.6 0 0 1 5.68-5.5Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
            (0, i.jsx)("path", {
                d: "M11 2c.52 0 1.02.04 1.51.11.43.07.61.57.38.94-.23.36-.4.7-.53.97l-.12.24a2.78 2.78 0 0 0 0 2.26c.26.59.86 1.75 1.9 2.8.27.27.12.8-.25.89A7.54 7.54 0 0 0 8 17.5a.5.5 0 0 1-.48.5h-5.1a1 1 0 0 1-.72-1.7l1.52-1.53c.18-.17.2-.45.06-.66A7.31 7.31 0 0 1 2 10c0-4.42 4.03-8 9-8Z",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
            (0, i.jsx)("path", {
                fillRule: "evenodd",
                d: "M19 1.39c3.05 0 4.52 2.73 4.94 3.68.09.2.09.43 0 .64-.42.95-1.89 3.68-4.93 3.68-3.05 0-4.52-2.73-4.93-3.68a.78.78 0 0 1 0-.64c.41-.95 1.88-3.68 4.93-3.68Zm0 2.36c0-.34-.28-.61-.6-.52a2.25 2.25 0 1 0 2.86 2.12c0-.34-.35-.52-.67-.42l-.82.25a.6.6 0 0 1-.78-.58v-.85Z",
                clipRule: "evenodd",
                fill: "string" == typeof l ? l : l.css,
                className: u,
            }),
        ],
    });
};
