a.d(l, { k: () => c });
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
                d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                fillRule: "evenodd",
                d: "M19.53 6.47a.75.75 0 0 0-1.28.53v3.8l-2.76-2.37a.75.75 0 1 0-.98 1.14l3.42 2.93-3.42 2.93a.75.75 0 1 0 .98 1.14l2.76-2.37V18a.75.75 0 0 0 1.28.53l3-3a.75.75 0 0 0-.04-1.1l-2.25-1.93 2.25-1.93a.75.75 0 0 0 .04-1.1l-3-3Zm1.37 8.57-1.15-.98v2.13l1.15-1.15Zm-1.15-6.23v2.13l1.15-.98-1.15-1.15Z",
                clipRule: "evenodd",
                className: r,
            }),
        ],
    });
};
