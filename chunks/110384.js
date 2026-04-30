n.d(e, { W: () => r });
var i = n(627968);
n(64700);
var l = n(661531),
    a = n(996682),
    s = n(27989);
let r = (t) => {
    let {
            size: e = "md",
            width: n,
            height: r,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
        } = t,
        c = (0, s.J)(e),
        S = c?.width ?? n,
        A = c?.height ?? r;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: S,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
            className: o,
        }),
    });
};
