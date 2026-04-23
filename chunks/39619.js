a.d(t, { X: () => s });
var n = a(627968);
a(64700);
var r = a(827734),
    i = a(996682),
    l = a(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: a,
            height: s,
            color: _ = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
        } = e,
        c = (0, l.J)(t),
        u = c?.width ?? a,
        h = c?.height ?? s;
    return (0, n.jsxs)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("path", {
                fill: "string" == typeof _ ? _ : _.css,
                d: "m7.7 16.95 3.68-6.76a1 1 0 0 0-.5-1.4A3 3 0 1 1 15 6a1 1 0 1 0 2 0 5 5 0 1 0-7.85 4.1L5.95 16a2 2 0 1 0 1.78 3h8.54a2 2 0 1 0 0-2H7.73l-.02-.05Z",
                className: o,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof _ ? _ : _.css,
                d: "M13.8 6.86A2 2 0 1 0 12.16 8l4.53 6.58a1 1 0 0 0 .82.43h.5a3 3 0 1 1-1.98 5.25 1 1 0 0 0-.66-.25h-.01a1 1 0 0 0-.66 1.75A4.98 4.98 0 0 0 23 18a5 5 0 0 0-4.97-5L13.8 6.86ZM5.97 13.88a1 1 0 0 1-.72 1.21 3 3 0 1 0 2.73 5.16 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 1 18a5 5 0 0 1 3.75-4.84 1 1 0 0 1 1.22.72Z",
                className: o,
            }),
        ],
    });
};
