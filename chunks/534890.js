h.d(t, { ChatIcon: () => n });
var i = h(477900);
h(582128);
var c = h(661531),
    e = h(996682),
    a = h(27989);
function n(s) {
    let {
            size: t = "md",
            width: h,
            height: n,
            color: r = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...l
        } = s,
        o = (0, a.J)(t),
        p = o?.width ?? h,
        w = o?.height ?? n;
    return (0, i.jsx)("svg", {
        ...(0, e.A)(l),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: d,
        }),
    });
}
