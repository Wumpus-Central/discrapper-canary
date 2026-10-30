e.d(l, { A: () => h });
var s = e(477900);
e(582128);
var a = e(661531),
    i = e(996682),
    c = e(27989);
function h(t) {
    let {
            size: l = "md",
            width: e,
            height: h,
            color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = t,
        v = (0, c.J)(l),
        d = v?.width ?? e,
        A = v?.height ?? h;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "m12.5 20.96-1.02-2.58 9.92.5-.45 4.12-8.45-2.04ZM14.88 1 1 7.39 3.15 17h2.83l-.5-6.88.44-.13L7.62 17h2.95l-.11-8.38.43-.13 1.49 8.52h3.11l.74-10.14.43-.13.77 10.27h4.12L23 2.92 14.88 1Z",
            className: r,
        }),
    });
}
