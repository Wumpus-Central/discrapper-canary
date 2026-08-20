h.d(a, { k: () => i });
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
    return (0, s.jsxs)("svg", {
        ...(0, c.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, s.jsx)("path", {
                fillRule: "evenodd",
                d: "M18.5 23c.88 0 1.7-.25 2.4-.69l1.4 1.4a1 1 0 0 0 1.4-1.42l-1.39-1.4A4.5 4.5 0 1 0 18.5 23Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
                clipRule: "evenodd",
                fill: "string" == typeof d ? d : d.css,
                className: n,
            }),
            (0, s.jsx)("path", {
                d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z",
                fill: "string" == typeof d ? d : d.css,
                className: n,
            }),
        ],
    });
}
