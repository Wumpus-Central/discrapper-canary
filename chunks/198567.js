a.d(l, { F: () => c });
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
                d: "M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2 20.53A9.53 9.53 0 0 1 11.53 11h.94c1.28 0 2.5.25 3.61.7.41.18.36.77-.05.96a7 7 0 0 0-3.65 8.6c.11.36-.13.74-.5.74H6.15a.5.5 0 0 1-.5-.55l.27-2.6c.02-.26-.27-.37-.41-.16-.48.74-1.03 1.8-1.32 2.9a.53.53 0 0 1-.5.41h-.22C2.66 22 2 21.34 2 20.53Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
                className: r,
            }),
        ],
    });
};
