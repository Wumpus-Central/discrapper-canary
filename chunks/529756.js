"use strict";
n.d(t, { c: () => l });
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
                d: "M1.71 7.8c-.5.12-.8.62-.68 1.12l2.64 10.87c.12.5.63.8 1.13.68l3.28-.8a2.8 2.8 0 0 1-2.06-2.64L5.82 6.8l-4.1 1ZM8.59 4.86a.93.93 0 0 0-.92.95L7.88 17c.01.51.44.92.95.91l4.83-.09-1.24-.3a2.8 2.8 0 0 1-2.06-3.38l2.27-9.35-4.04.07Z",
                className: d,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M22.97 5.7c.12-.5-.18-1.01-.68-1.13l-6.35-1.54a.93.93 0 0 0-1.12.68l-2.65 10.87c-.12.5.19 1 .69 1.13l6.34 1.54c.5.12 1-.19 1.13-.69L22.97 5.7Z",
                className: d,
            }),
        ],
    });
}
