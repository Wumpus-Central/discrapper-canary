e.d(t, { L: () => c });
var s = e(477900);
e(582128);
var l = e(661531),
    i = e(996682),
    n = e(27989);
function c(a) {
    let {
            size: t = "md",
            width: e,
            height: c,
            color: h = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = a,
        d = (0, n.J)(t),
        v = d?.width ?? e,
        g = d?.height ?? c;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            d: "M13.5 11.73c0-1.22.84-2.26 1.6-3.21a4 4 0 1 0-6.22 0c.78.95 1.62 1.99 1.62 3.21V13H5a3 3 0 0 0-3 3v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-5.5v-1.27ZM5 19a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H5Z",
            className: r,
        }),
    });
}
