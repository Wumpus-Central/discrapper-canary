"use strict";
n.d(t, { v: () => o });
var i = n(627968);
n(64700);
var r = n(661531),
    s = n(996682),
    a = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: l = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, a.J)(t),
        _ = d?.width ?? n,
        f = d?.height ?? o;
    return (0, i.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M12 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM2 5a3 3 0 0 1 3-3h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V5ZM15 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM19 3a1 1 0 0 1 1-1 2 2 0 0 1 2 2 1 1 0 1 1-2 0 1 1 0 0 1-1-1ZM21 19a1 1 0 0 1 1 1 2 2 0 0 1-2 2 1 1 0 1 1 0-2 1 1 0 0 1 1-1ZM18 21a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM22 8a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V8ZM21 13a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z",
            className: u,
        }),
    });
};
