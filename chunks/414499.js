h.d(t, { h: () => c });
var i = h(477900);
h(582128);
var e = h(661531),
    a = h(996682),
    r = h(27989);
function c(s) {
    let {
            size: t = "md",
            width: h,
            height: c,
            color: d = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = s,
        l = (0, r.J)(t),
        o = l?.width ?? h,
        w = l?.height ?? c;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M14 4a5 5 0 0 1 5 5v.2A5.5 5.5 0 0 1 17.5 20H5a4 4 0 0 1-.85-7.9 4 4 0 0 1 5.18-4.87A5 5 0 0 1 14 4Z",
            className: n,
        }),
    });
}
