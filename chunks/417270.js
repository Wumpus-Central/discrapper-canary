h.d(t, { RetryIcon: () => c });
var i = h(477900);
h(582128);
var a = h(661531),
    e = h(996682),
    r = h(27989);
function c(s) {
    let {
            size: t = "md",
            width: h,
            height: c,
            color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = s,
        p = (0, r.J)(t),
        l = p?.width ?? h,
        w = p?.height ?? c;
    return (0, i.jsx)("svg", {
        ...(0, e.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: l,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
            className: d,
        }),
    });
}
