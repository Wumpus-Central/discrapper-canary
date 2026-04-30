"use strict";
n.d(t, { R: () => o });
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
            fillRule: "evenodd",
            d: "M21.41 5.41A2 2 0 1 0 18.6 2.6l-7.75 7.74a.53.53 0 0 1-.58.11 6 6 0 1 0 3.3 3.28.51.51 0 0 1 .1-.55c.19-.19.5-.19.68 0l1.25 1.24a2 2 0 1 0 2.82-2.82l-1.23-1.24a.5.5 0 0 1 0-.7l.47-.47c.2-.2.5-.2.7 0l1.24 1.23A2 2 0 1 0 22.4 7.6l-1.23-1.24a.5.5 0 0 1 0-.7l.23-.24ZM10 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
            clipRule: "evenodd",
            className: u,
        }),
    });
};
