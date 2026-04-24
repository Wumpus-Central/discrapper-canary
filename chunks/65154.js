a.d(t, { S: () => l });
var n = a(627968);
a(64700);
var s = a(661531),
    i = a(996682),
    r = a(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: a,
            height: l,
            secondaryColor: o = "transparent",
            secondaryColorClass: d = "",
            color: c = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: m = "",
            ...g
        } = e,
        p = (0, r.J)(t),
        v = p?.width ?? a,
        h = p?.height ?? l;
    return (0, n.jsxs)("svg", {
        ...(0, i.A)(g),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof o ? o : o.css, className: d }),
            (0, n.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM9 8.09c0-.88 1-1.4 1.73-.9l5.8 3.91c.63.44.63 1.36 0 1.8l-5.8 3.9C10 17.3 9 16.8 9 15.92V8.1Z",
                clipRule: "evenodd",
                className: m,
            }),
        ],
    });
};
