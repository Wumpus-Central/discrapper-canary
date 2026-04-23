a.d(l, { $: () => c });
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
                d: "M18.3 23.7a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L20 20.58V14.9a1 1 0 0 0-2 .1v5.59l-.73-.73-1.56-1.57a1 1 0 0 0-1.42 1.42l4 4Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
            (0, t.jsx)("path", {
                d: "M15.31 16.02a3 3 0 0 0-3.3 3.3c.04.34-.2.68-.55.68H6a5 5 0 0 1-3.2-8.85c.12-.1.2-.24.2-.4a6 6 0 0 1 4.55-5.57c.36-.1.64.26.57.62a6.03 6.03 0 0 0 .3 3.4c.12.32.58.15.58-.2a5.98 5.98 0 0 1 6-6 6 6 0 0 1 5.83 7.44c-.06.22.03.45.2.59a5 5 0 0 1 1.92 4.65c-.02.19-.19.32-.38.35-.28.04-.57-.16-.57-.45V15a3 3 0 0 0-6 0v.46c0 .35-.34.6-.69.56Z",
                fill: "string" == typeof h ? h : h.css,
                className: r,
            }),
        ],
    });
};
