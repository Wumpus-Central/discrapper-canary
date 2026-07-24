"use strict";
n.d(t, { B: () => l });
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
            fillRule: "evenodd",
            d: "M0 6c0-1.1 1.07-2 2.4-2h19.2c1.32 0 2.4.9 2.4 2v1H0V6ZM2.4 20C1.07 20 0 19.1 0 18v-8h24v8c0 1.1-1.08 2-2.4 2H2.4ZM18 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM3 13a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
};
