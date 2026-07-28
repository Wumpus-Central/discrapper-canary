t.d(a, { Y: () => d });
var e = t(627968);
t(64700);
var h = t(661531),
    i = t(996682),
    l = t(27989);
function d(s) {
    let {
            size: a = "md",
            width: t,
            height: d,
            color: n = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...r
        } = s,
        o = (0, l.J)(a),
        p = o?.width ?? t,
        w = o?.height ?? d;
    return (0, e.jsx)("svg", {
        ...(0, i.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
            className: c,
        }),
    });
}
