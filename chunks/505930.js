h.d(e, { y: () => d });
var s = h(477900);
h(582128);
var i = h(661531),
    t = h(996682),
    c = h(27989);
function d(l) {
    let {
            size: e = "md",
            width: h,
            height: d,
            color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = l,
        p = (0, c.J)(e),
        r = p?.width ?? h,
        w = p?.height ?? d;
    return (0, s.jsx)("svg", {
        ...(0, t.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M2.07 10.94a1.25 1.25 0 0 1 .73-2.25h6.12l1.9-5.83c.37-1.15 2-1.15 2.37 0l1.89 5.83h6.12c1.2 0 1.71 1.54.73 2.25l-4.95 3.6 1.9 5.82a1.25 1.25 0 0 1-1.93 1.4L12 18.16l-4.95 3.6c-.98.7-2.3-.25-1.92-1.4l1.89-5.82-4.95-3.6Zm11.55-.25h5.26l-4.25 3.09 1.62 5-4.25-3.1-4.25 3.1 1.62-5-4.25-3.1h5.26l1.62-5 1.62 5Z",
            clipRule: "evenodd",
            className: a,
        }),
    });
}
