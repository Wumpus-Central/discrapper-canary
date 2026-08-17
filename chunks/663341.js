t.d(h, { PlusLargeIcon: () => c });
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
            color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...l
        } = s,
        o = (0, r.J)(h),
        p = o?.width ?? t,
        w = o?.height ?? c;
    return (0, i.jsx)("svg", {
        ...(0, e.A)(l),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M13 3a1 1 0 1 0-2 0v8H3a1 1 0 1 0 0 2h8v8a1 1 0 0 0 2 0v-8h8a1 1 0 0 0 0-2h-8V3Z",
            className: d,
        }),
    });
}
