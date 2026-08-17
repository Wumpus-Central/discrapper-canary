h.d(a, { PauseIcon: () => n });
var t = h(477900);
h(582128);
var i = h(661531),
    e = h(996682),
    c = h(27989);
function n(s) {
    let {
            size: a = "md",
            width: h,
            height: n,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = s,
        p = (0, c.J)(a),
        l = p?.width ?? h,
        w = p?.height ?? n;
    return (0, t.jsx)("svg", {
        ...(0, e.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: l,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6ZM15 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z",
            className: d,
        }),
    });
}
