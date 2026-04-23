a.d(l, { m: () => c });
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
    return (0, t.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            d: "M19.94 7.03c.58-.28 1.27.01 1.46.62l1 3.1c.2.6-.19 1.25-.81 1.36l-6.73 1.2 4.71 4.98c.44.46.37 1.2-.14 1.57l-2.62 1.92c-.52.38-1.25.21-1.55-.35l-3.22-6.06-3.29 6.07c-.3.56-1.03.72-1.54.35l-2.63-1.93a1.05 1.05 0 0 1-.14-1.57l4.7-4.98-6.72-1.2c-.62-.11-1-.75-.81-1.36l1-3.1c.2-.61.88-.9 1.45-.63l6.24 3.01-.93-6.84C9.28 2.56 9.77 2 10.41 2h3.2c.63 0 1.12.56 1.04 1.18l-.88 6.85 6.17-3Z",
            className: r,
        }),
    });
};
