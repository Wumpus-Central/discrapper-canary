a.d(l, { f: () => c });
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
            fillRule: "evenodd",
            d: "M9.35 3A3 3 0 0 0 7.1 4l-5.34 6a3 3 0 0 0 0 4l5.34 6a3 3 0 0 0 2.24 1H20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H9.35Zm1.94 5.3a1 1 0 0 1 1.42 0L15 10.58l2.3-2.3a1 1 0 1 1 1.4 1.42L16.42 12l2.3 2.3a1 1 0 0 1-1.42 1.4L15 13.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L13.58 12l-2.3-2.3a1 1 0 0 1 0-1.4Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
};
