s.d(h, { d: () => d });
var t = s(477900);
s(582128);
var i = s(661531),
    c = s(996682),
    e = s(27989);
function d(a) {
    let {
            size: h = "md",
            width: s,
            height: d,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: v = "",
            ...n
        } = a,
        p = (0, e.J)(h),
        l = p?.width ?? s,
        o = p?.height ?? d;
    return (0, t.jsx)("svg", {
        ...(0, c.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: l,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M15 11a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5ZM2 20c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5ZM13 20c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5ZM2 9c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5Z",
            className: v,
        }),
    });
}
