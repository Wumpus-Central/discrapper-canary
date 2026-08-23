h.d(a, { K: () => l });
var t = h(477900);
h(582128);
var i = h(661531),
    e = h(996682),
    c = h(27989);
function l(s) {
    let {
            size: a = "md",
            width: h,
            height: l,
            color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = s,
        n = (0, c.J)(a),
        v = n?.width ?? h,
        o = n?.height ?? l;
    return (0, t.jsxs)("svg", {
        ...(0, e.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M7 2a1 1 0 0 0-2 0v3H2a1 1 0 1 0 0 2h3v8a4 4 0 0 0 4 4h8v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2V2Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M9 7h6a2 2 0 0 1 2 2v6h2V9a4 4 0 0 0-4-4H9v2Z",
                className: r,
            }),
        ],
    });
}
