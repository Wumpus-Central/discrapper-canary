h.d(l, { A: () => v });
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
    return (0, e.jsx)("svg", {
        ...(0, t.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M4.46 5.03A4 4 0 0 1 8.34 2h7.32a4 4 0 0 1 3.88 3.03L20.78 10H22a1 1 0 1 1 0 2h-.54c.35.59.54 1.27.54 2v4a2 2 0 0 1-1 1.73V21a1 1 0 1 1-2 0v-1H5v1a1 1 0 1 1-2 0v-1.27A2 2 0 0 1 2 18v-4c0-.73.2-1.41.54-2H2a1 1 0 1 1 0-2h1.22l1.24-4.97Zm13.14.48L18.72 10H5.28L6.4 5.51A2 2 0 0 1 8.34 4h7.32a2 2 0 0 1 1.94 1.51ZM10 14a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm-6 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm14-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
};
