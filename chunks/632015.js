n.d(t, { f: () => o });
var r = n(477900);
n(582128);
var i = n(661531),
    l = n(996682),
    s = n(27989);
function o(e) {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: a = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, s.J)(t),
        h = u?.width ?? n,
        g = u?.height ?? o;
    return (0, r.jsx)("svg", {
        ...(0, l.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M18.45 1.85a3 3 0 0 0-4.1 1.1l-1.5 2.6a3 3 0 0 0 1.1 4.1l2.6 1.5a3 3 0 0 0 4.1-1.1l1.5-2.6a3 3 0 0 0-1.1-4.1l-2.6-1.5ZM5 2a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM5 13a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H5ZM13 16a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-3Z",
            className: c,
        }),
    });
}
