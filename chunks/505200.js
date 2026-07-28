l.d(s, { A: () => c });
var t = l(627968);
l(64700);
var v = l(661531),
    i = l(996682),
    e = l(27989);
function c(h) {
    let {
            size: s = "md",
            width: l,
            height: c,
            color: a = v.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...r
        } = h,
        o = (0, e.J)(s),
        d = o?.width ?? l,
        w = o?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "m12.5 20.96-1.02-2.58 9.92.5-.45 4.12-8.45-2.04ZM14.88 1 1 7.39 3.15 17h2.83l-.5-6.88.44-.13L7.62 17h2.95l-.11-8.38.43-.13 1.49 8.52h3.11l.74-10.14.43-.13.77 10.27h4.12L23 2.92 14.88 1Z",
            className: n,
        }),
    });
}
