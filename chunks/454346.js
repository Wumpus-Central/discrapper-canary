t.d(i, { a: () => r });
var l = t(627968);
t(64700);
var s = t(827734),
    a = t(996682),
    n = t(27989);
let r = (e) => {
    let {
            size: i = "md",
            width: t,
            height: r,
            color: d = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = e,
        u = (0, n.J)(i),
        h = u?.width ?? t,
        m = u?.height ?? r;
    return (0, l.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "m21.67 12-7.25 7.07h-3.23L7.17 23v-3.93H2.33V4.93L6.36 1h15.3v11Zm-14.5 2.36h3.62v2.75l2.82-2.75h3.22l3.23-3.15V2.57H7.16v11.79Zm6.04-9.04v4.72H11.6V5.32h1.6Zm4.43 4.72h-1.61V5.32h1.6v4.72Z",
            className: o,
        }),
    });
};
