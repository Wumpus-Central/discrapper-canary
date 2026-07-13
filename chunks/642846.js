e.d(a, { Y: () => d });
var t = e(627968);
e(64700);
var h = e(661531),
    l = e(996682),
    i = e(27989);
let d = (s) => {
    let {
            size: a = "md",
            width: e,
            height: d,
            color: r = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...n
        } = s,
        o = (0, i.J)(a),
        p = o?.width ?? e,
        w = o?.height ?? d;
    return (0, t.jsx)("svg", {
        ...(0, l.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
            className: c,
        }),
    });
};
