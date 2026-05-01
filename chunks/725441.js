s.d(h, { v: () => r });
var t = s(627968);
s(64700);
var e = s(661531),
    i = s(996682),
    l = s(27989);
let r = (a) => {
    let {
            size: h = "md",
            width: s,
            height: r,
            color: c = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: v = "",
            ...d
        } = a,
        w = (0, l.J)(h),
        n = w?.width ?? s,
        o = w?.height ?? r;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M12 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM2 5a3 3 0 0 1 3-3h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V5ZM15 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM19 3a1 1 0 0 1 1-1 2 2 0 0 1 2 2 1 1 0 1 1-2 0 1 1 0 0 1-1-1ZM21 19a1 1 0 0 1 1 1 2 2 0 0 1-2 2 1 1 0 1 1 0-2 1 1 0 0 1 1-1ZM18 21a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM22 8a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V8ZM21 13a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z",
            className: v,
        }),
    });
};
