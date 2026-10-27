(e.r(t), e.d(t, { BookmarkIcon: () => c }));
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
            d: "M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16a1 1 0 0 1-1.67.74l-5.66-5.13a1 1 0 0 0-1.34 0l-5.66 5.13A1 1 0 0 1 4 20.99V5Z",
            className: r,
        }),
    });
}
