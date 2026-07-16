a.d(t, { B: () => s });
var l = a(627968);
a(64700);
var i = a(661531),
    c = a(996682),
    n = a(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: a,
            height: s,
            color: h = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...u
        } = e,
        d = (0, n.J)(t),
        y = d?.width ?? a,
        w = d?.height ?? s;
    return (0, l.jsx)("svg", {
        ...(0, c.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: y,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            fillRule: "evenodd",
            d: "M0 6c0-1.1 1.07-2 2.4-2h19.2c1.32 0 2.4.9 2.4 2v1H0V6ZM2.4 20C1.07 20 0 19.1 0 18v-8h24v8c0 1.1-1.08 2-2.4 2H2.4ZM18 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM3 13a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
};
