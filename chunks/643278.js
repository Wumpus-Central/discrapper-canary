n.d(t, { s: () => r });
var i = n(627968);
n(64700);
var l = n(661531),
    a = n(996682),
    s = n(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, s.J)(t),
        h = u?.width ?? n,
        m = u?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M4.5 5.04A3 3 0 0 0 2 8v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-2.5-2.96c-.27-.04-.5.18-.5.46V6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-.5c0-.28-.23-.5-.5-.46ZM7 14a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z",
                clipRule: "evenodd",
                className: d,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M7 5a1 1 0 0 1 1-1h1c.55 0 .98-.47 1.24-.96a2 2 0 0 1 3.52 0c.26.49.69.96 1.24.96h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5Z",
                className: d,
            }),
        ],
    });
};
