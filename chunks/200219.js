e.d(a, { N: () => d });
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
            color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
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
            fill: "string" == typeof c ? c : c.css,
            fillRule: "evenodd",
            d: "M15.35 7.24C15.9 6.67 16 5.8 16 5a3 3 0 1 1 3 3c-.8 0-1.67.09-2.24.65a1.5 1.5 0 0 0 0 2.11l1.12 1.12a3 3 0 0 1 0 4.24l-5 5a3 3 0 0 1-4.25 0l-5.76-5.75a3 3 0 0 1 0-4.24l4.04-4.04.97-.97a3 3 0 0 1 4.24 0l1.12 1.12c.58.58 1.52.58 2.1 0ZM6.9 9.9 4.3 12.54a1 1 0 0 0 0 1.42l2.17 2.17.83-.84a1 1 0 0 1 1.42 1.42l-.84.83.59.59 1.83-1.84a1 1 0 0 1 1.42 1.42l-1.84 1.83.17.17a1 1 0 0 0 1.42 0l2.63-2.62L6.9 9.9Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
};
