a.d(l, { u: () => c });
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
                d: "M5 9a1 1 0 0 1 1 1 6 6 0 0 0 11.37 2.68c.2-.4.58-.68 1.03-.68.68 0 1.18.65.9 1.27-1 2.24-3 3.93-5.43 4.51a1.1 1.1 0 0 0-.87 1.04V19a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1v-.18c0-.5-.38-.92-.87-1.04A8 8 0 0 1 4 10a1 1 0 0 1 1-1Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M12 2c.59 0 1.14.13 1.65.35.8.37.91 1.4.47 2.17l-1.72 3c-1.22 2.13.46 4.48 2.64 4.48.19 0 .3.2.2.35A4 4 0 0 1 8 10V6a4 4 0 0 1 4-4Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                fillRule: "evenodd",
                d: "M18.09 1.63c.4-.7 1.43-.69 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9ZM19 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-.45-3.5a.5.5 0 0 0-.5.55l.22 2.02c.01.16.17.26.33.23a1.93 1.93 0 0 1 .8 0c.16.03.32-.07.33-.23l.21-2.02a.5.5 0 0 0-.5-.55h-.89Z",
                clipRule: "evenodd",
                className: r,
            }),
        ],
    });
};
