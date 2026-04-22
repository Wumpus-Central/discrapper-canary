a.d(l, { i: () => c });
var t = a(627968);
a(64700);
var s = a(827734),
    i = a(996682),
    n = a(27989);
let c = (e) => {
    let {
            size: l = "md",
            width: a,
            height: c,
            color: h = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = e,
        d = (0, n.J)(l),
        v = d?.width ?? a,
        g = d?.height ?? c;
    return (0, t.jsxs)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M19 16a3 3 0 1 0 1.98 5.25 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h1.24A3 3 0 0 0 19 16ZM12.78 22.22c.18.34-.02.76-.4.77L12 23c-1.74 0-3.4-.4-4.86-1.13a1.52 1.52 0 0 1-.8-1.84A6 6 0 0 1 12 16c.32 0 .52.34.4.64a6.99 6.99 0 0 0 .38 5.58ZM13.55 14.57a3.02 3.02 0 0 0 1.43-2.88 3 3 0 1 0-1.43 2.88Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M17.27 12.21A.22.22 0 0 1 17 12a5 5 0 1 0-9.6 1.94c.17.42.13.9-.18 1.23l-.05.06c-.43.47-1.18.42-1.45-.14a7 7 0 1 1 13.27-3.59c.01.28-.21.5-.49.52-.42.03-.83.1-1.23.2Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M21.27 12.38A.4.4 0 0 1 21 12a9 9 0 1 0-16.54 4.92c.27.42.26.97-.07 1.33l-.02.02c-.41.44-1.12.43-1.46-.07A11 11 0 1 1 23 11.5c.01.28-.22.5-.49.54-.32.05-.62.16-.9.3a.41.41 0 0 1-.33.04Z",
                className: r,
            }),
        ],
    });
};
