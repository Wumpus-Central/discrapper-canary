i.d(s, { p: () => n });
var h = i(477900);
i(582128);
var l = i(661531),
    e = i(996682),
    r = i(27989);
function n(t) {
    let {
            size: s = "md",
            width: i,
            height: n,
            color: c = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...w
        } = t,
        a = (0, r.J)(s),
        d = a?.width ?? i,
        g = a?.height ?? n;
    return (0, h.jsx)("svg", {
        ...(0, e.A)(w),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("circle", {
            cx: "12",
            cy: "12",
            r: "10",
            fill: "string" == typeof c ? c : c.css,
            className: o,
        }),
    });
}
