"use strict";
n.d(t, { W: () => l });
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
            d: "M22 18a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h20ZM18 3a3 3 0 0 1 3 3v9.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5V6a3 3 0 0 1 3-3h12Z",
            className: d,
        }),
    });
}
