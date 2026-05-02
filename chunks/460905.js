r.d(t, { n: () => o });
var n = r(627968);
r(64700);
var a = r(661531),
    i = r(996682),
    l = r(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: r,
            height: o,
            color: s = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, l.J)(t),
        m = u?.width ?? r,
        E = u?.height ?? o;
    return (0, n.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
};
