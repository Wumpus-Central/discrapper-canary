"use strict";
n.d(t, { k: () => a });
var l = n(477900);
n(582128);
var i = n(661531),
    s = n(996682),
    r = n(27989);
function a(e) {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, r.J)(t),
        h = d?.width ?? n,
        m = d?.height ?? a;
    return (0, l.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
            className: u,
        }),
    });
}
