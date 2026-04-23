a.d(l, { B: () => c });
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
                d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm-.3 3.3a1 1 0 0 0-1.4 1.4l.79.8-.8.8a1 1 0 0 0 1.42 1.4l.79-.79.8.8a1 1 0 0 0 1.4-1.42l-.79-.79.8-.8a1 1 0 0 0-1.42-1.4l-.79.79-.8-.8Zm9.6 0a1 1 0 0 1 1.4 0l.8.79.8-.8a1 1 0 1 1 1.4 1.42l-.79.79.8.8a1 1 0 0 1-1.42 1.4l-.79-.79-.8.8a1 1 0 0 1-1.4-1.42l.79-.79-.8-.8a1 1 0 0 1 0-1.4Zm-6.21 8.26a1 1 0 0 1-1.66-1.12 5.5 5.5 0 0 1 9.14 0 1 1 0 0 1-1.66 1.12 3.5 3.5 0 0 0-5.82 0Z",
                clipRule: "evenodd",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                className: r,
            }),
        ],
    });
};
