"use strict";
n.d(t, { E: () => o });
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
            secondaryColor: l = "transparent",
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
            (0, r.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof l ? l : l.css, className: u }),
            (0, r.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm1.44-15.94L13.06 14a1.06 1.06 0 0 1-2.12 0l-.38-6.94a1 1 0 0 1 1-1.06h.88a1 1 0 0 1 1 1.06Zm-.19 10.69a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z",
                clipRule: "evenodd",
                className: d,
            }),
        ],
    });
};
