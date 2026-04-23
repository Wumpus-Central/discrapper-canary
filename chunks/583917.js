a.d(l, { d: () => c });
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
                d: "M12 10a2 2 0 0 1-2.75 1.85c-.12-.04-.25.03-.25.15a3 3 0 1 0 3-3c-.12 0-.2.13-.15.25A2 2 0 0 1 12 10Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                fillRule: "evenodd",
                d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Zm6.85-9.65C18.3 13.48 16.27 17 12 17s-6.3-3.52-6.85-4.65a.8.8 0 0 1 0-.7C5.7 10.52 7.73 7 12 7s6.3 3.52 6.85 4.65c.1.22.1.48 0 .7Z",
                clipRule: "evenodd",
                className: r,
            }),
        ],
    });
};
