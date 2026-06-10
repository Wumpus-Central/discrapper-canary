s.d(l, { R: () => r });
var t = s(627968);
s(64700);
var h = s(661531),
    i = s(996682),
    e = s(27989);
let r = (a) => {
    let {
            size: l = "md",
            width: s,
            height: r,
            color: d = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
        } = a,
        w = (0, e.J)(l),
        n = w?.width ?? s,
        o = w?.height ?? r;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "m13.96 5.46 4.58 4.58a1 1 0 0 0 1.42 0l1.38-1.38a2 2 0 0 0 0-2.82l-3.18-3.18a2 2 0 0 0-2.82 0l-1.38 1.38a1 1 0 0 0 0 1.42ZM2.11 20.16l.73-4.22a3 3 0 0 1 .83-1.61l7.87-7.87a1 1 0 0 1 1.42 0l4.58 4.58a1 1 0 0 1 0 1.42l-7.87 7.87a3 3 0 0 1-1.6.83l-4.23.73a1.5 1.5 0 0 1-1.73-1.73Z",
            className: p,
        }),
    });
};
