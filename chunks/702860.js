"use strict";
n.d(t, { W: () => l });
var i = n(627968);
n(64700);
var r = n(661531),
    a = n(996682),
    s = n(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: n,
            height: l,
            secondaryColor: o = "transparent",
            secondaryColorClass: d = "",
            color: c = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ..._
        } = e,
        E = (0, s.J)(t),
        A = E?.width ?? n,
        h = E?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, a.A)(_),
        xmlns: "http://www.w3.org/2000/svg",
        width: A,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof o ? o : o.css, className: d }),
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM7 11a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
