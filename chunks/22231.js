e.d(a, { R: () => d });
var s = e(627968);
e(64700);
var t = e(661531),
    i = e(996682),
    h = e(27989);
let d = (l) => {
    let {
            size: a = "md",
            width: e,
            height: d,
            color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...n
        } = l,
        o = (0, h.J)(a),
        w = o?.width ?? e,
        p = o?.height ?? d;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "m13.96 5.46 4.58 4.58a1 1 0 0 0 1.42 0l1.38-1.38a2 2 0 0 0 0-2.82l-3.18-3.18a2 2 0 0 0-2.82 0l-1.38 1.38a1 1 0 0 0 0 1.42ZM2.11 20.16l.73-4.22a3 3 0 0 1 .83-1.61l7.87-7.87a1 1 0 0 1 1.42 0l4.58 4.58a1 1 0 0 1 0 1.42l-7.87 7.87a3 3 0 0 1-1.6.83l-4.23.73a1.5 1.5 0 0 1-1.73-1.73Z",
            className: c,
        }),
    });
};
