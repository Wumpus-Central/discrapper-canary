n.d(t, { D: () => a });
var i = n(627968);
n(64700);
var l = n(661531),
    s = n(996682),
    r = n(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
        } = e,
        c = (0, r.J)(t),
        h = c?.width ?? n,
        A = c?.height ?? a;
    return (0, i.jsx)("svg", {
        ...(0, s.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M12.7 3.3a1 1 0 0 0-1.4 0l-8 8a1 1 0 1 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l6.3 6.3a1 1 0 0 0 1.4-1.42l-8-8Z",
            className: o,
        }),
    });
};
