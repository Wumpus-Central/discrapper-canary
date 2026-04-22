n.d(t, { S: () => s });
var r = n(627968);
n(64700);
var i = n(827734),
    a = n(996682),
    l = n(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: n,
            height: s,
            secondaryColor: d = "transparent",
            secondaryColorClass: o = "",
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...h
        } = e,
        m = (0, l.J)(t),
        p = m?.width ?? n,
        E = m?.height ?? s;
    return (0, r.jsxs)("svg", {
        ...(0, a.A)(h),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, r.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof d ? d : d.css, className: o }),
            (0, r.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM9 8.09c0-.88 1-1.4 1.73-.9l5.8 3.91c.63.44.63 1.36 0 1.8l-5.8 3.9C10 17.3 9 16.8 9 15.92V8.1Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
};
