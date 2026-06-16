n.d(t, { q: () => r });
var i = n(627968);
n(64700);
var l = n(661531),
    s = n(996682),
    a = n(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, a.J)(t),
        h = d?.width ?? n,
        m = d?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M20 3a3 3 0 0 1 3 3v9.5a.5.5 0 0 1-1 0V15a3 3 0 0 0-6 0 1 1 0 0 1-1 1 3 3 0 0 0-3 3c0 .85-.58 2-1.42 2H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                clipRule: "evenodd",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                className: u,
            }),
        ],
    });
};
