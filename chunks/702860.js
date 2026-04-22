a.d(l, { W: () => c });
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
            secondaryColor: h = "transparent",
            secondaryColorClass: r = "",
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...v
        } = e,
        g = (0, n.J)(l),
        p = g?.width ?? a,
        m = g?.height ?? c;
    return (0, t.jsxs)("svg", {
        ...(0, i.A)(v),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof h ? h : h.css, className: r }),
            (0, t.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM7 11a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Z",
                clipRule: "evenodd",
                className: d,
            }),
        ],
    });
};
