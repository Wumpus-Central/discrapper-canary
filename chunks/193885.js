l.d(a, { V: () => c });
var t = l(477900);
l(582128);
var i = l(661531),
    h = l(996682),
    e = l(27989);
function c(s) {
    let {
            size: a = "md",
            width: l,
            height: c,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...d
        } = s,
        o = (0, e.J)(a),
        w = o?.width ?? l,
        p = o?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, h.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "m9.17 12.67 2.16 2.16a1 1 0 0 0 .99.25l2.57-.75A3 3 0 0 0 16.6 13l4.91-8.05a1.8 1.8 0 0 0-2.47-2.47L11 7.39a3 3 0 0 0-1.32 1.72l-.75 2.57a1 1 0 0 0 .25.99ZM8.03 13.14c.27.07.51.23.7.43l1.7 1.7c.2.19.36.43.43.7A4 4 0 0 1 7 21H2a1 1 0 1 1 0-2c.68 0 1.13-.77 1.04-1.44a4 4 0 0 1 5-4.42Z",
            className: n,
        }),
    });
}
