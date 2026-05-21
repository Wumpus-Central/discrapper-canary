t.d(h, { K: () => r });
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
            d: "M20.7 12.7a1 1 0 0 0 0-1.4l-8-8a1 1 0 1 0-1.4 1.4l6.29 6.3H4a1 1 0 1 0 0 2h13.59l-6.3 6.3a1 1 0 0 0 1.42 1.4l8-8Z",
            className: d,
        }),
    });
};
