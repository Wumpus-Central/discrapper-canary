t.d(h, { g: () => c });
var i = t(477900);
t(582128);
var a = t(661531),
    e = t(996682),
    l = t(27989);
function c(s) {
    let {
            size: h = "md",
            width: t,
            height: c,
            color: r = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...n
        } = s,
        p = (0, l.J)(h),
        o = p?.width ?? t,
        w = p?.height ?? c;
    return (0, i.jsx)("svg", {
        ...(0, e.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
            className: d,
        }),
    });
}
