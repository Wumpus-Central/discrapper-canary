t.d(h, { m: () => v });
var s = t(627968);
t(64700);
var e = t(661531),
    i = t(996682),
    l = t(27989);
let v = (a) => {
    let {
            size: h = "md",
            width: t,
            height: v,
            color: r = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: w = "",
            ...c
        } = a,
        d = (0, l.J)(h),
        n = d?.width ?? t,
        o = d?.height ?? v;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
            className: w,
        }),
    });
};
