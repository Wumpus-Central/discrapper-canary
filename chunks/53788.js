"use strict";
n.d(t, { G: () => o });
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
            d: "M15 5a3 3 0 0 0-3-3 1 1 0 0 0-1 1v2a3 3 0 0 1-.19 1.05L6.55 8.93a7.9 7.9 0 0 0-3.26 8.4c.43 1.77 1.44 3.42 3.14 4.07.86.34 1.89.6 2.95.6h8.03a2.09 2.09 0 0 0 1.93-2.88l-.4-.97a.2.2 0 0 1 .08-.24l.54-.33a1.99 1.99 0 0 0 .8-2.44l-.43-1.02a.25.25 0 0 1 .03-.23l.6-.9a1.92 1.92 0 0 0-1.6-2.99h-5.39A8 8 0 0 0 15 5.44V5Z",
            className: u,
        }),
    });
};
