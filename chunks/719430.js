a.d(l, { A: () => c });
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
                d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM1.23 21.13a1 1 0 0 1 0-1.41l7.48-7.48c.2-.2.5-.2.7 0l2.13 2.12c.2.2.2.52 0 .71l-7.48 7.48a1 1 0 0 1-1.41 0l-1.42-1.42Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
            (0, t.jsx)("path", {
                d: "M21.3 13.07c.21.26.62.32.86.08l.45-.44a2 2 0 0 0 0-2.83l-2.94-2.94.65-.66a1 1 0 0 0 0-1.41l-1.41-1.42a1 1 0 0 0-1.41 0l-.66.66-2.72-2.72a2 2 0 0 0-2.83 0L7.76 4.93a2 2 0 0 0 0 2.83l7.53 7.53c.26.26.71.08.71-.29a3 3 0 0 1 5.3-1.93Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
        ],
    });
};
