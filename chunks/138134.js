t.d(a, { FlagIcon: () => e });
var i = t(477900);
t(582128);
var h = t(661531),
    c = t(996682),
    l = t(27989);
function e(s) {
    let {
            size: a = "md",
            width: t,
            height: e,
            color: n = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = s,
        o = (0, l.J)(a),
        p = o?.width ?? t,
        w = o?.height ?? e;
    return (0, i.jsx)("svg", {
        ...(0, c.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M3 1a1 1 0 0 1 1 1v.82l8.67-1.45A2 2 0 0 1 15 3.35v1.47l5.67-.95A2 2 0 0 1 23 5.85v7.3a2 2 0 0 1-1.67 1.98l-9 1.5a2 2 0 0 1-1.78-.6c-.2-.21-.08-.54.18-.68a5.01 5.01 0 0 0 1.94-1.94c.18-.32-.1-.66-.46-.6L4 14.18V21a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z",
            className: r,
        }),
    });
}
