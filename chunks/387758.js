"use strict";
n.d(t, { G: () => l });
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
            d: "M9.6 7.8 4 12l5.6 4.2a1 1 0 0 1 .4.8v1.98c0 .21-.24.33-.4.2l-8.1-6.4a1 1 0 0 1 0-1.56l8.1-6.4c.16-.13.4-.01.4.2V7a1 1 0 0 1-.4.8ZM14.4 7.8 20 12l-5.6 4.2a1 1 0 0 0-.4.8v1.98c0 .21.24.33.4.2l8.1-6.4a1 1 0 0 0 0-1.56l-8.1-6.4a.25.25 0 0 0-.4.2V7a1 1 0 0 0 .4.8Z",
            className: d,
        }),
    });
}
