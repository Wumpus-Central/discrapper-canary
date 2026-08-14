i.d(t, { o: () => r });
var h = i(477900);
i(582128);
var l = i(661531),
    a = i(996682),
    e = i(27989);
function r(s) {
    let {
            size: t = "md",
            width: i,
            height: r,
            color: c = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...o
        } = s,
        d = (0, e.J)(t),
        w = d?.width ?? i,
        p = d?.height ?? r;
    return (0, h.jsx)("svg", {
        ...(0, a.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: n,
        }),
    });
}
