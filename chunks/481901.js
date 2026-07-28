"use strict";
n.d(t, { d: () => l });
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
            d: "M15 11a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5ZM2 20c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5ZM13 20c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5ZM2 9c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5Z",
            className: d,
        }),
    });
}
