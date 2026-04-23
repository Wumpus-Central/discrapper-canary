a.d(l, { z: () => c });
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
                d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h2.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V4a3 3 0 0 0-3-3H8ZM18 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                fillRule: "evenodd",
                d: "M14 10a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-6Zm5.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM18 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
                clipRule: "evenodd",
                className: r,
            }),
        ],
    });
};
