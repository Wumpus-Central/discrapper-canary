a.d(t, { _: () => s });
var n = a(627968);
a(64700);
var l = a(661531),
    r = a(996682),
    i = a(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: a,
            height: s,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, i.J)(t),
        h = u?.width ?? a,
        p = u?.height ?? s;
    return (0, n.jsxs)("svg", {
        ...(0, r.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M11.47 6.55a.75.75 0 0 1 1.06 0l2.2 2.14c.14.14.23.34.23.55v5.52c0 .21-.09.4-.23.55l-2.2 2.14a.75.75 0 0 1-1.06 0l-2.2-2.14a.77.77 0 0 1-.23-.55V9.24c0-.21.09-.41.23-.55l2.2-2.14Z",
                className: c,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M10.95 1.43a1.5 1.5 0 0 1 2.1 0l5.49 5.33c.3.29.46.68.46 1.1v8.44c-.04.35-.2.69-.46.94l-5.49 5.33-.11.1a1.5 1.5 0 0 1-2-.1l-5.48-5.33c-.3-.29-.46-.68-.46-1.1V7.86c0-.42.17-.81.46-1.1l5.49-5.33ZM7.29 7.76c-.2.2-.3.46-.3.73v7.02c0 .27.1.54.3.73l4 3.9a1 1 0 0 0 1.41 0l4-3.9c.2-.2.31-.46.31-.73V8.49c0-.27-.1-.54-.3-.73l-4-3.9a1 1 0 0 0-1.41 0l-4 3.9Z",
                clipRule: "evenodd",
                className: c,
            }),
        ],
    });
};
