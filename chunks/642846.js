t.d(h, { Y: () => r });
var a = t(477900);
t(582128);
var i = t(661531),
    c = t(996682),
    e = t(27989);
function r(s) {
    let {
            size: h = "md",
            width: t,
            height: r,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = s,
        l = (0, e.J)(h),
        o = l?.width ?? t,
        w = l?.height ?? r;
    return (0, a.jsx)("svg", {
        ...(0, c.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
            className: n,
        }),
    });
}
