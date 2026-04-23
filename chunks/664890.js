a.d(l, { G: () => c });
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
            d: "M6.46 22a1 1 0 0 1-1-1V3.08a1 1 0 0 1 1-1h7.05c1.58 0 2.84.47 3.78 1.39a4.9 4.9 0 0 1 1.42 3.67 4.7 4.7 0 0 1-.81 2.85 4.64 4.64 0 0 1-2.02 1.59c2.46.62 3.7 2.25 3.7 4.9 0 1.9-.56 3.29-1.65 4.2-1.1.88-2.65 1.32-4.65 1.32H6.46Zm6.16-11.43a3.8 3.8 0 0 0 2.5-.75c.6-.5.9-1.26.9-2.28 0-1.02-.3-1.78-.9-2.28a3.7 3.7 0 0 0-2.5-.78H8.17v6.09h4.45Zm.6 9.03c1.12 0 2-.27 2.63-.8.65-.56.98-1.4.98-2.52 0-1.11-.33-1.94-.98-2.48a3.93 3.93 0 0 0-2.63-.8H8.17v6.6h5.05Z",
            className: r,
        }),
    });
};
