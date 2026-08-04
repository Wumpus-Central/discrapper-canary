i.d(t, { e: () => r });
var a = i(477900);
i(582128);
var h = i(661531),
    e = i(996682),
    c = i(27989);
function r(s) {
    let {
            size: t = "md",
            width: i,
            height: r,
            color: d = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = s,
        l = (0, c.J)(t),
        o = l?.width ?? i,
        w = l?.height ?? r;
    return (0, a.jsx)("svg", {
        ...(0, e.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M2 8a1 1 0 0 1 2 0v3.54A10.26 10.26 0 0 1 12.38 7c4.23 0 7.83 2.74 9.53 6.6a1 1 0 1 1-1.82.8c-1.45-3.25-4.4-5.4-7.71-5.4a8.34 8.34 0 0 0-6.96 4H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V8Z",
            className: n,
        }),
    });
}
