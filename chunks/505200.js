l.d(e, { A: () => n });
var s = l(477900);
l(582128);
var a = l(661531),
    i = l(996682),
    h = l(27989);
function n(t) {
    let {
            size: e = "md",
            width: l,
            height: n,
            color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = t,
        v = (0, h.J)(e),
        A = v?.width ?? l,
        d = v?.height ?? n;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: A,
        height: d,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "m12.5 20.96-1.02-2.58 9.92.5-.45 4.12-8.45-2.04ZM14.88 1 1 7.39 3.15 17h2.83l-.5-6.88.44-.13L7.62 17h2.95l-.11-8.38.43-.13 1.49 8.52h3.11l.74-10.14.43-.13.77 10.27h4.12L23 2.92 14.88 1Z",
            className: r,
        }),
    });
}
