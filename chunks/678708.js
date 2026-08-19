l.d(t, { FolderIcon: () => s });
var n = l(477900);
l(582128);
var i = l(661531),
    r = l(996682),
    a = l(27989);
function s(e) {
    let {
            size: t = "md",
            width: l,
            height: s,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, a.J)(t),
        h = u?.width ?? l,
        E = u?.height ?? s;
    return (0, n.jsx)("svg", {
        ...(0, r.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M2 5a3 3 0 0 1 3-3h3.93a2 2 0 0 1 1.66.9L12 5h7a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z",
            className: c,
        }),
    });
}
