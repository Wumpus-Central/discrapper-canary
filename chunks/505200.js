t.d(s, { A: () => n });
var e = t(477900);
t(582128);
var i = t(661531),
    a = t(996682),
    h = t(27989);
function n(l) {
    let {
            size: s = "md",
            width: t,
            height: n,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = l,
        v = (0, h.J)(s),
        d = v?.width ?? t,
        g = v?.height ?? n;
    return (0, e.jsx)("svg", {
        ...(0, a.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "m12.5 20.96-1.02-2.58 9.92.5-.45 4.12-8.45-2.04ZM14.88 1 1 7.39 3.15 17h2.83l-.5-6.88.44-.13L7.62 17h2.95l-.11-8.38.43-.13 1.49 8.52h3.11l.74-10.14.43-.13.77 10.27h4.12L23 2.92 14.88 1Z",
            className: r,
        }),
    });
}
