t.d(h, { m: () => r });
var s = t(627968);
t(64700);
var l = t(661531),
    e = t(996682),
    i = t(27989);
let r = (a) => {
    let {
            size: h = "md",
            width: t,
            height: r,
            color: v = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...w
        } = a,
        n = (0, i.J)(h),
        o = n?.width ?? t,
        c = n?.height ?? r;
    return (0, s.jsx)("svg", {
        ...(0, e.A)(w),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: c,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof v ? v : v.css,
            d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
            className: d,
        }),
    });
};
