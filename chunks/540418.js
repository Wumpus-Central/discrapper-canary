i.d(s, { A: () => n });
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
        children: (0, h.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M10.16 4.06a2.13 2.13 0 0 1 3.68 0l8 13.77c.81 1.41-.2 3.17-1.84 3.17H4a2.11 2.11 0 0 1-1.84-3.17l8-13.77Z",
            className: o,
        }),
    });
}
