"use strict";
n.d(t, { s: () => s });
var r = n(627968);
n(64700);
var a = n(661531),
    i = n(996682),
    l = n(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: n,
            height: s,
            color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, l.J)(t),
        _ = u?.width ?? n,
        p = u?.height ?? s;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: c,
        }),
    });
};
