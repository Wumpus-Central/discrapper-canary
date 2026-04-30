"use strict";
n.d(t, { I: () => o });
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
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z",
                clipRule: "evenodd",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M12.5 8c.28 0 .5.22.5.5V9c0 .1 0 .2.02.31.03.34-.21.69-.56.69H9.85l-.67 4h4.97l.28-1.68c.06-.34.44-.52.77-.43a3 3 0 0 0 .8.11c.27 0 .47.24.43.5l-.25 1.5H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86l-.86 5.16A1 1 0 0 1 6 20.84L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 1 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8h2.31Z",
                className: u,
            }),
        ],
    });
};
