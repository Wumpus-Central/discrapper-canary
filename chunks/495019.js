h.d(l, { q: () => v });
var e = h(627968);
h(64700);
var s = h(827734),
    t = h(996682),
    i = h(27989);
let v = (a) => {
    let {
            size: l = "md",
            width: h,
            height: v,
            color: d = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...r
        } = a,
        n = (0, i.J)(l),
        o = n?.width ?? h,
        w = n?.height ?? v;
    return (0, e.jsxs)("svg", {
        ...(0, t.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, e.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                fillRule: "evenodd",
                d: "M20 3a3 3 0 0 1 3 3v9.5a.5.5 0 0 1-1 0V15a3 3 0 0 0-6 0 1 1 0 0 1-1 1 3 3 0 0 0-3 3c0 .85-.58 2-1.42 2H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                clipRule: "evenodd",
                className: c,
            }),
            (0, e.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                className: c,
            }),
        ],
    });
};
