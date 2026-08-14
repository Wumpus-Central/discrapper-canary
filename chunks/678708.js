t.d(e, { s: () => n });
var s = t(477900);
t(582128);
var a = t(661531),
    i = t(996682),
    r = t(27989);
function n(l) {
    let {
            size: e = "md",
            width: t,
            height: n,
            color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...d
        } = l,
        o = (0, r.J)(e),
        v = o?.width ?? t,
        f = o?.height ?? n;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M2 5a3 3 0 0 1 3-3h3.93a2 2 0 0 1 1.66.9L12 5h7a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z",
            className: h,
        }),
    });
}
