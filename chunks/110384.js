a.d(t, { W: () => r });
var h = a(627968);
a(64700);
var i = a(661531),
    e = a(996682),
    l = a(27989);
let r = (s) => {
    let {
            size: t = "md",
            width: a,
            height: r,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
        } = s,
        w = (0, l.J)(t),
        n = w?.width ?? a,
        o = w?.height ?? r;
    return (0, h.jsx)("svg", {
        ...(0, e.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
            className: p,
        }),
    });
};
