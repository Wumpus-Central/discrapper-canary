"use strict";
n.d(t, { P: () => l });
var i = n(627968);
n(64700);
var r = n(661531),
    a = n(996682),
    s = n(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, s.J)(t),
        _ = u?.width ?? n,
        E = u?.height ?? l;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M7.8 15.77c.7.43 1.2 1.14 1.2 1.96V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3.27c0-.82.5-1.53 1.2-1.96a8.06 8.06 0 0 0 .12-13.63c-.6-.39-1.32.09-1.32.8v5.98a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V2.94c0-.71-.72-1.19-1.32-.8a8.06 8.06 0 0 0 .12 13.63Z",
            className: d,
        }),
    });
};
