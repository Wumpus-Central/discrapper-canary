a.d(t, { F: () => d });
var i = a(477900);
a(582128);
var l = a(661531),
    n = a(996682),
    s = a(27989);
function d(e) {
    let {
            size: t = "md",
            width: a,
            height: d,
            color: r = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...o
        } = e,
        c = (0, s.J)(t),
        u = c?.width ?? a,
        g = c?.height ?? d;
    return (0, i.jsx)("svg", {
        ...(0, n.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
            clipRule: "evenodd",
            className: h,
        }),
    });
}
