"use strict";
n.d(t, { t: () => o });
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
            d: "M19.38 11.38a3 3 0 0 0 4.24 0l.03-.03a.5.5 0 0 0 0-.7L13.35.35a.5.5 0 0 0-.7 0l-.03.03a3 3 0 0 0 0 4.24L13 5l-2.92 2.92-3.65-.34a2 2 0 0 0-1.6.58l-.62.63a1 1 0 0 0 0 1.42l9.58 9.58a1 1 0 0 0 1.42 0l.63-.63a2 2 0 0 0 .58-1.6l-.34-3.64L19 11l.38.38ZM9.07 17.07a.5.5 0 0 1-.08.77l-5.15 3.43a.5.5 0 0 1-.63-.06l-.42-.42a.5.5 0 0 1-.06-.63L6.16 15a.5.5 0 0 1 .77-.08l2.14 2.14Z",
            className: u,
        }),
    });
};
