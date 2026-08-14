h.d(t, { E: () => l });
var i = h(477900);
h(582128);
var a = h(661531),
    e = h(996682),
    c = h(27989);
function l(s) {
    let {
            size: t = "md",
            width: h,
            height: l,
            color: r = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...n
        } = s,
        p = (0, c.J)(t),
        o = p?.width ?? h,
        w = p?.height ?? l;
    return (0, i.jsx)("svg", {
        ...(0, e.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M7.4 2A5.4 5.4 0 0 0 2 7.4v.31C2 15.61 8.4 22 16.29 22h.37C19.6 22 22 19.6 22 16.66c0-.4-.25-.74-.63-.85l-5.06-1.56a1 1 0 0 0-1.19.5L14 17a8.52 8.52 0 0 1-7-7l2.73-1.56a1 1 0 0 0 .43-1.25L8.23 2.55A.9.9 0 0 0 7.4 2Z",
            className: d,
        }),
    });
}
