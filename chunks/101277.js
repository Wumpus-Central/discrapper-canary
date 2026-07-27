"use strict";
n.d(t, { P: () => l });
var i = n(627968);
n(64700);
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
            d: "M13 7.83a3 3 0 1 0-2 0V11H8a4 4 0 0 0-4 4v1.17a3 3 0 1 0 2 0V15c0-1.1.9-2 2-2h3v3.17a3 3 0 1 0 2 0V13h3a2 2 0 0 1 2 2v1.17a3 3 0 1 0 2 0V15a4 4 0 0 0-4-4h-3V7.83Z",
            className: d,
        }),
    });
}
