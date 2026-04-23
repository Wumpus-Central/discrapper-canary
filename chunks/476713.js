a.d(l, { l: () => c });
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
                fillRule: "evenodd",
                d: "M19.33 13.01c.28-.03.58.02.84.15l3.05 1.52c.48.24.78.73.78 1.27v1.51a7.1 7.1 0 0 1-4.21 6.49.71.71 0 0 1-.58 0A7.1 7.1 0 0 1 15 17.46v-1.51c0-.54.3-1.03.78-1.27l3.05-1.52a1.49 1.49 0 0 1 .33-.12l.17-.03Zm.17 8.73c.06 0 .12-.01.17-.03a4.18 4.18 0 0 0 2.48-3.82v-.9c0-.31-.18-.6-.46-.74l-1.8-.9a.88.88 0 0 0-.39-.09v6.48Z",
                clipRule: "evenodd",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M11.8 2a10 10 0 0 1 10 9.73l-.73-.36-.2-.09a3.5 3.5 0 0 0-2.75 0l-.19.09-3.04 1.52A3.42 3.42 0 0 0 13 15.95v1.51c0 1.53.38 2.99 1.07 4.28-.73.17-1.49.26-2.27.26H2a1 1 0 0 1-.75-1.66l2.07-2.37a.52.52 0 0 0 .04-.61A10 10 0 0 1 11.8 2Z",
                className: r,
            }),
        ],
    });
};
