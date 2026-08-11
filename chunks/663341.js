t.d(h, { p: () => r });
var i = t(477900);
t(582128);
var a = t(661531),
    e = t(996682),
    p = t(27989);
function r(s) {
    let {
            size: h = "md",
            width: t,
            height: r,
            color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...n
        } = s,
        l = (0, p.J)(h),
        o = l?.width ?? t,
        w = l?.height ?? r;
    return (0, i.jsx)("svg", {
        ...(0, e.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M13 3a1 1 0 1 0-2 0v8H3a1 1 0 1 0 0 2h8v8a1 1 0 0 0 2 0v-8h8a1 1 0 0 0 0-2h-8V3Z",
            className: d,
        }),
    });
}
