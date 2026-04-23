a.d(l, { Z: () => c });
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
                d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7.5a.5.5 0 0 0 .5-.5V19c0-.1 0-.2.02-.31.03-.35-.21-.69-.56-.69H6a1 1 0 1 1 0-2h8.4c.21 0 .4-.13.49-.33a4.5 4.5 0 0 1 6.2-2.16c.38.2.91-.05.91-.48V5a3 3 0 0 0-3-3H5Zm1 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H6Zm-1 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z",
                fill: "string" == typeof h ? h : h.css,
                fillRule: "evenodd",
                clipRule: "evenodd",
                className: r,
            }),
            (0, t.jsx)("path", {
                d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 0 1 2 0Z",
                fill: "string" == typeof h ? h : h.css,
                fillRule: "evenodd",
                clipRule: "evenodd",
                className: r,
            }),
        ],
    });
};
