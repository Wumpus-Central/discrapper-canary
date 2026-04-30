"use strict";
n.d(t, { w: () => o });
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
    return (0, i.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M1.23 21.13a1 1 0 0 1 0-1.41l7.48-7.47c.2-.2.51-.2.7 0l2.13 2.12c.2.2.2.5 0 .7l-7.48 7.48a1 1 0 0 1-1.41 0l-1.42-1.42ZM7.76 7.76l8.48 8.49a2 2 0 0 0 2.83 0l3.54-3.54a2 2 0 0 0 0-2.83l-2.94-2.94.65-.66a1 1 0 0 0 0-1.4l-1.41-1.42a1 1 0 0 0-1.41 0l-.66.65-2.72-2.71a2 2 0 0 0-2.83 0L7.76 4.93a2 2 0 0 0 0 2.83Z",
            className: u,
        }),
    });
};
