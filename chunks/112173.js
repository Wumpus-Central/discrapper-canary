t.d(a, { J: () => r });
var i = t(627968);
t(64700);
var l = t(661531),
    h = t(996682),
    e = t(27989);
function r(s) {
    let {
            size: a = "md",
            width: t,
            height: r,
            color: c = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...n
        } = s,
        p = (0, e.J)(a),
        o = p?.width ?? t,
        w = p?.height ?? r;
    return (0, i.jsx)("svg", {
        ...(0, h.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M16.3 21.7a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L18 18.58V3a1 1 0 1 0-2 0v15.59l-2.3-2.3a1 1 0 0 0-1.4 1.42l4 4ZM6.3 2.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L8 5.42V21a1 1 0 1 1-2 0V5.41l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4Z",
            className: d,
        }),
    });
}
