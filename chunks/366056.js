r.d(t, { M: () => c });
var s = r(477900);
r(582128);
var a = r(661531),
    l = r(996682),
    n = r(27989);
function c(e) {
    let {
            size: t = "md",
            width: r,
            height: c,
            color: i = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = e,
        u = (0, n.J)(t),
        h = u?.width ?? r,
        g = u?.height ?? c;
    return (0, s.jsx)("svg", {
        ...(0, l.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M5.1 1a2.1 2.1 0 0 1 1.8 3.14h14.05c.84 0 1.34.94.87 1.63L19.1 9.85c-.23.35-.23.8 0 1.16l2.72 4.08c.47.7-.03 1.62-.87 1.62H6.15v5.24a1.05 1.05 0 0 1-2.1 0V4.91A2.1 2.1 0 0 1 5.1 1ZM16.3 7.6c-.4-.42-1.07-.42-1.48 0l-3.45 3.44-1.35-1.35a1.05 1.05 0 0 0-1.48 1.48l2.1 2.1c.4.4 1.06.4 1.47 0l4.2-4.2c.4-.4.4-1.07 0-1.48Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
}
