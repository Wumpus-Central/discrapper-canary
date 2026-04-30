"use strict";
n.d(t, { M: () => o });
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
            d: "M10.04 20.25H7.12a3.5 3.5 0 0 1-2.48-1.03A3.37 3.37 0 0 1 3.6 16.8V7.21a3.48 3.48 0 0 1 3.52-3.45h2.92v16.49ZM11.5 2.18H7.12A5.08 5.08 0 0 0 2 7.2v9.58c0 2.78 2.3 5.03 5.12 5.03h4.38c.08 0 .15-.06.15-.14V2.32c0-.08-.07-.14-.15-.14ZM5.1 8.07c0 1.02.85 1.85 1.89 1.85s1.88-.83 1.88-1.85S8.03 6.22 7 6.22s-1.88.83-1.88 1.85ZM17.6 11a2 2 0 0 1 2.02 1.98 2 2 0 0 1-2.01 2 2 2 0 0 1-2.03-2A2 2 0 0 1 17.61 11ZM13.8 21.82h3.09A5.08 5.08 0 0 0 22 16.8V7.21c0-2.78-2.3-5.03-5.12-5.03h-3.1c-.07 0-.13.05-.13.12v19.38c0 .08.06.14.14.14Z",
            className: u,
        }),
    });
};
