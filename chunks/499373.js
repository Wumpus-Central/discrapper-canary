t.d(h, { T: () => c });
var i = t(477900);
t(582128);
var a = t(661531),
    e = t(996682),
    r = t(27989);
function c(s) {
    let {
            size: h = "md",
            width: t,
            height: c,
            color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = s,
        l = (0, r.J)(h),
        o = l?.width ?? t,
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
            d: "M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z",
            className: n,
        }),
    });
}
