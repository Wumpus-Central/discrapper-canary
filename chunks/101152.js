"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(827734),
    a = n(996682),
    s = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            secondaryColor: l = i.A.colors.ICON_FEEDBACK_NOTIFICATION,
            secondaryColorClass: u = "",
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ..._
        } = e,
        f = (0, s.J)(t),
        p = f?.width ?? n,
        h = f?.height ?? o;
    return (0, r.jsxs)("svg", {
        ...(0, a.A)(_),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, r.jsx)("circle", { cx: "19", cy: "19", r: "5", fill: "string" == typeof l ? l : l.css, className: u }),
            (0, r.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M5.52 2a3 3 0 0 0-2.89 2.19l-.55 1.98A3.02 3.02 0 0 0 4.98 10h.05A2.97 2.97 0 0 0 8 7.03V3a1 1 0 0 0-1-1H5.52ZM9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4.03a2.99 2.99 0 0 1-3.3 2.95A3 3 0 0 1 9 7V3ZM17 2a1 1 0 0 0-1 1V7.03A2.95 2.95 0 0 0 18.96 10h.06c2 0 3.44-1.9 2.9-3.83l-.56-1.98A3 3 0 0 0 18.48 2H17Z",
                className: d,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M20.35 12.13c.33.06.65-.18.65-.51v-.2c0-.18-.2-.3-.37-.24a4.46 4.46 0 0 1-4.94-1.1.28.28 0 0 0-.4 0 4.49 4.49 0 0 1-6.58 0 .28.28 0 0 0-.4 0 4.45 4.45 0 0 1-4.94 1.1c-.17-.07-.37.06-.37.24V19a3 3 0 0 0 3 3h2.75c.14 0 .25-.11.25-.25V16c0-1.1.9-2 2-2h2a2 2 0 0 1 .55.08c.21.06.45.02.6-.13a6.98 6.98 0 0 1 6.2-1.82Z",
                className: d,
            }),
        ],
    });
};
