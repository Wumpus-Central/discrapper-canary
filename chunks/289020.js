"use strict";
n.d(t, { E: () => o });
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
            d: "M7.4 2A5.4 5.4 0 0 0 2 7.4v.31C2 15.61 8.4 22 16.29 22h.37C19.6 22 22 19.6 22 16.66c0-.4-.25-.74-.63-.85l-5.06-1.56a1 1 0 0 0-1.19.5L14 17a8.52 8.52 0 0 1-7-7l2.73-1.56a1 1 0 0 0 .43-1.25L8.23 2.55A.9.9 0 0 0 7.4 2Z",
            className: u,
        }),
    });
};
