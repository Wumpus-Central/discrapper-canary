"use strict";
r.d(t, { c: () => l });
var n = r(627968);
r(64700);
var i = r(661531),
    a = r(996682),
    s = r(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: r,
            height: l,
            secondaryColor: o = "transparent",
            secondaryColorClass: c = "",
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ..._
        } = e,
        p = (0, s.J)(t),
        f = p?.width ?? r,
        m = p?.height ?? l;
    return (0, n.jsxs)("svg", {
        ...(0, a.A)(_),
        xmlns: "http://www.w3.org/2000/svg",
        width: f,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof o ? o : o.css, className: c }),
            (0, n.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
