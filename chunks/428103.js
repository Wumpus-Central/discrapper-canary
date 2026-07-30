"use strict";
n.d(t, { l: () => l });
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
            fillRule: "evenodd",
            d: "M4 4a1 1 0 0 0 0 2h16a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a1 1 0 1 1 0 2H4Zm15.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
}
