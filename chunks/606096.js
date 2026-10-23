(a.r(t), a.d(t, { BookmarkIcon: () => h }));
var s = a(477900);
a(582128);
var l = a(661531),
    i = a(996682),
    n = a(27989);
function h(e) {
    let {
            size: t = "md",
            width: a,
            height: h,
            color: c = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = e,
        d = (0, n.J)(t),
        E = d?.width ?? a,
        g = d?.height ?? h;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: E,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16a1 1 0 0 1-1.67.74l-5.66-5.13a1 1 0 0 0-1.34 0l-5.66 5.13A1 1 0 0 1 4 20.99V5Z",
            className: r,
        }),
    });
}
