i.d(t, { f: () => r });
var h = i(477900);
i(582128);
var a = i(661531),
    e = i(996682),
    l = i(27989);
function r(s) {
    let {
            size: t = "md",
            width: i,
            height: r,
            color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...n
        } = s,
        p = (0, l.J)(t),
        o = p?.width ?? i,
        w = p?.height ?? r;
    return (0, h.jsx)("svg", {
        ...(0, e.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M15.7 3.3a1 1 0 0 1 0 1.4L8.42 12l7.3 7.3a1 1 0 0 1-1.42 1.4l-8-8a1 1 0 0 1 0-1.4l8-8a1 1 0 0 1 1.42 0Z",
            className: d,
        }),
    });
}
