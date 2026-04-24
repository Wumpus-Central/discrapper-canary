n.d(t, { W: () => o });
var i = n(627968);
n(64700);
var r = n(661531),
    a = n(996682),
    l = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: s = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, l.J)(t),
        _ = u?.width ?? n,
        h = u?.height ?? o;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
            className: c,
        }),
    });
};
