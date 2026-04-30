a.d(h, { N: () => i });
var e = a(627968);
a(64700);
var s = a(661531),
    c = a(996682),
    t = a(27989);
let i = (l) => {
    let {
            size: h = "md",
            width: a,
            height: i,
            color: d = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...n
        } = l,
        o = (0, t.J)(h),
        w = o?.width ?? a,
        p = o?.height ?? i;
    return (0, e.jsx)("svg", {
        ...(0, c.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
};
