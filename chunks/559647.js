i.d(s, { SendMessageIcon: () => c });
var t = i(477900);
i(582128);
var l = i(661531),
    a = i(996682),
    n = i(27989);
function c(e) {
    let {
            size: s = "md",
            width: i,
            height: c,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = e,
        u = (0, n.J)(s),
        h = u?.width ?? i,
        p = u?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, a.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M6.6 10.02 14 11.4a.6.6 0 0 1 0 1.18L6.6 14l-2.94 5.87a1.48 1.48 0 0 0 1.99 1.98l17.03-8.52a1.48 1.48 0 0 0 0-2.64L5.65 2.16a1.48 1.48 0 0 0-1.99 1.98l2.94 5.88Z",
            className: r,
        }),
    });
}
