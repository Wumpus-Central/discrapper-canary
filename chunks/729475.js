t.d(h, { T: () => v });
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
            d: "M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM18 4a2 2 0 0 1 2 2v3a1 1 0 1 0 2 0V6a4 4 0 0 0-4-4h-3a1 1 0 1 0 0 2h3ZM20 18a2 2 0 0 1-2 2h-3a1 1 0 1 0 0 2h3a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3Z",
            className: w,
        }),
    });
};
