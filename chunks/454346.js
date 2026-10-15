e.d(l, { a: () => h });
var s = e(477900);
e(582128);
var i = e(661531),
    a = e(996682),
    n = e(27989);
function h(t) {
    let {
            size: l = "md",
            width: e,
            height: h,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = t,
        v = (0, n.J)(l),
        d = v?.width ?? e,
        A = v?.height ?? h;
    return (0, s.jsx)("svg", {
        ...(0, a.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "m21.67 12-7.25 7.07h-3.23L7.17 23v-3.93H2.33V4.93L6.36 1h15.3v11Zm-14.5 2.36h3.62v2.75l2.82-2.75h3.22l3.23-3.15V2.57H7.16v11.79Zm6.04-9.04v4.72H11.6V5.32h1.6Zm4.43 4.72h-1.61V5.32h1.6v4.72Z",
            className: r,
        }),
    });
}
