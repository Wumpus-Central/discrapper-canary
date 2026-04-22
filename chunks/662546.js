h.d(l, { O: () => v });
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
                d: "M5 5.5c0-.28-.23-.5-.5-.46A3 3 0 0 0 2 8v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-2.5-2.96c-.27-.04-.5.18-.5.46V6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-.5Zm11.7 6.8a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4l2.3 2.29 4.3-4.3a1 1 0 0 1 1.4 0Z",
                clipRule: "evenodd",
                className: c,
            }),
            (0, e.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M17 5.5V6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1c.55 0 .98-.47 1.24-.96a2 2 0 0 1 3.52 0c.26.49.69.96 1.24.96h1a1 1 0 0 1 1 1v.5Z",
                className: c,
            }),
        ],
    });
};
