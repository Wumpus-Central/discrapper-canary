"use strict";
n.d(t, { s: () => r });
var l = n(627968);
n(64700);
var i = n(661531),
    s = n(996682),
    a = n(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
        } = e,
        d = (0, a.J)(t),
        h = d?.width ?? n,
        m = d?.height ?? r;
    return (0, l.jsx)("svg", {
        ...(0, s.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: c,
        }),
    });
};
