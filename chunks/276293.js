h.d(a, { N: () => i });
var s = h(477900);
h(582128);
var e = h(661531),
    c = h(996682),
    t = h(27989);
function i(l) {
    let {
            size: a = "md",
            width: h,
            height: i,
            color: d = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...o
        } = l,
        r = (0, t.J)(a),
        w = r?.width ?? h,
        g = r?.height ?? i;
    return (0, s.jsx)("svg", {
        ...(0, c.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z",
            clipRule: "evenodd",
            className: n,
        }),
    });
}
