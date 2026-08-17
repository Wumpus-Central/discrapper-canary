i.d(t, { FlagIcon: () => c });
var h = i(477900);
i(582128);
var a = i(661531),
    l = i(996682),
    e = i(27989);
function c(s) {
    let {
            size: t = "md",
            width: i,
            height: c,
            color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = s,
        d = (0, e.J)(t),
        w = d?.width ?? i,
        g = d?.height ?? c;
    return (0, h.jsx)("svg", {
        ...(0, l.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M3 1a1 1 0 0 1 1 1v.82l8.67-1.45A2 2 0 0 1 15 3.35v1.47l5.67-.95A2 2 0 0 1 23 5.85v7.3a2 2 0 0 1-1.67 1.98l-9 1.5a2 2 0 0 1-1.78-.6c-.2-.21-.08-.54.18-.68a5.01 5.01 0 0 0 1.94-1.94c.18-.32-.1-.66-.46-.6L4 14.18V21a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z",
            className: r,
        }),
    });
}
