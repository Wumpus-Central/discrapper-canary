t.d(a, { L: () => n });
var s = t(477900);
t(582128);
var l = t(661531),
    i = t(996682),
    h = t(27989);
function n(e) {
    let {
            size: a = "md",
            width: t,
            height: n,
            color: c = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = e,
        d = (0, h.J)(a),
        p = d?.width ?? t,
        g = d?.height ?? n;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M13.5 11.73c0-1.22.84-2.26 1.6-3.21a4 4 0 1 0-6.22 0c.78.95 1.62 1.99 1.62 3.21V13H5a3 3 0 0 0-3 3v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-5.5v-1.27ZM5 19a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H5Z",
            className: r,
        }),
    });
}
