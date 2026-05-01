s.d(l, { A: () => c });
var t = s(627968);
s(64700);
var v = s(661531),
    a = s(996682),
    e = s(27989);
let c = (h) => {
    let {
            size: l = "md",
            width: s,
            height: c,
            color: i = v.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = h,
        w = (0, e.J)(l),
        n = w?.width ?? s,
        o = w?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, a.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "m12.5 20.96-1.02-2.58 9.92.5-.45 4.12-8.45-2.04ZM14.88 1 1 7.39 3.15 17h2.83l-.5-6.88.44-.13L7.62 17h2.95l-.11-8.38.43-.13 1.49 8.52h3.11l.74-10.14.43-.13.77 10.27h4.12L23 2.92 14.88 1Z",
            className: r,
        }),
    });
};
