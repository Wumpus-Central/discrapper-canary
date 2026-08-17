i.d(t, { ChatIcon: () => c });
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
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: r,
        }),
    });
}
