a.d(t, { K: () => d });
var n = a(627968);
a(64700);
var i = a(827734),
    l = a(996682),
    r = a(27989);
let d = (e) => {
    let {
            size: t = "md",
            width: a,
            height: d,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...c
        } = e,
        _ = (0, r.J)(t),
        u = _?.width ?? a,
        m = _?.height ?? d;
    return (0, n.jsx)("svg", {
        ...(0, l.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
            clipRule: "evenodd",
            className: s,
        }),
    });
};
