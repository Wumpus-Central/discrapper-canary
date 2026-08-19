r.d(t, { r: () => a });
var n = r(477900);
r(582128);
var s = r(661531),
    l = r(996682),
    i = r(27989);
function a(e) {
    let {
            size: t = "md",
            width: r,
            height: a,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, i.J)(t),
        h = d?.width ?? r,
        m = d?.height ?? a;
    return (0, n.jsx)("svg", {
        ...(0, l.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M3.3 11.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
            className: u,
        }),
    });
}
