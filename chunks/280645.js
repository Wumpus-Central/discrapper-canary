"use strict";
n.d(t, { H: () => l });
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
    return (0, i.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M7.71 9.1a2.06 2.06 0 1 1 0 4.12 2.06 2.06 0 0 1 0-4.13Z",
                className: d,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M21 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h18ZM4.78 6.88a2 2 0 0 0-2 2v7c0 .26.03.48.08.66.15.5.8.3 1.02-.18A3.89 3.89 0 0 1 7.59 14h.24c1.62 0 2.9.77 3.59 2.33.21.48.9.7 1.04.2.04-.18.07-.4.07-.66v-7a2 2 0 0 0-2-2H4.78Zm11.15 7.85a1 1 0 0 0 0 2h4.37a1 1 0 1 0 0-2h-4.37Zm0-3.4a1 1 0 0 0 0 2h4.37a1 1 0 1 0 0-2h-4.37Zm0-3.4a1 1 0 0 0 0 2h2.69a1 1 0 0 0 0-2h-2.69Z",
                clipRule: "evenodd",
                className: d,
            }),
        ],
    });
}
