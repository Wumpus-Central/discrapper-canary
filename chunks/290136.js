"use strict";
n.d(t, { c: () => l });
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
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
