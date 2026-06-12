"use strict";
n.d(t, { y: () => o });
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
            secondaryColor: l = "transparent",
            secondaryColorClass: u = "",
            color: c = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ..._
        } = e,
        h = (0, a.J)(t),
        f = h?.width ?? n,
        p = h?.height ?? o;
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(_),
        xmlns: "http://www.w3.org/2000/svg",
        width: f,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof l ? l : l.css, className: u }),
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm5.7-13.3a1 1 0 0 0-1.4-1.4L10 14.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l7-7Z",
                clipRule: "evenodd",
                className: d,
            }),
        ],
    });
};
