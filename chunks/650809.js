"use strict";
n.d(t, { PaintPaletteIcon: () => l });
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
            d: "M19 16h-5a2 2 0 0 0-2 2v2c0 1.66-1.37 3.04-2.96 2.6A11 11 0 1 1 23 12c0 2.2-2 4-4 4ZM13.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17.25 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-3.75 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
}
