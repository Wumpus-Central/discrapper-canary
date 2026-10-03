t.d(s, { a: () => n });
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
            d: "m21.67 12-7.25 7.07h-3.23L7.17 23v-3.93H2.33V4.93L6.36 1h15.3v11Zm-14.5 2.36h3.62v2.75l2.82-2.75h3.22l3.23-3.15V2.57H7.16v11.79Zm6.04-9.04v4.72H11.6V5.32h1.6Zm4.43 4.72h-1.61V5.32h1.6v4.72Z",
            className: r,
        }),
    });
}
