h.d(t, { W: () => c });
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
            color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = s,
        l = (0, r.J)(t),
        o = l?.width ?? h,
        w = l?.height ?? c;
    return (0, i.jsx)("svg", {
        ...(0, e.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M7 4a1 1 0 0 0 0 2h9.59L4.29 18.3a1 1 0 1 0 1.42 1.4L18 7.42V17a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1H7Z",
            className: n,
        }),
    });
}
