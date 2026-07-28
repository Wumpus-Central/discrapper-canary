"use strict";
n.d(t, { h: () => l });
var i = n(477900);
n(582128);
var r = n(661531),
    a = n(996682),
    s = n(27989);
function l(e) {
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
            d: "M14 4a5 5 0 0 1 5 5v.2A5.5 5.5 0 0 1 17.5 20H5a4 4 0 0 1-.85-7.9 4 4 0 0 1 5.18-4.87A5 5 0 0 1 14 4Z",
            className: d,
        }),
    });
}
