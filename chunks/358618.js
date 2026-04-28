a.d(t, { _: () => o });
var n = a(627968);
a(64700);
var r = a(661531),
    i = a(996682),
    l = a(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: a,
            height: o,
            color: s = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, l.J)(t),
        p = u?.width ?? a,
        m = u?.height ?? o;
    return (0, n.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM22.7 8.3a1 1 0 0 0-1.4 0L19 10.58l-2.3-2.3a1 1 0 1 0-1.4 1.42L17.58 12l-2.3 2.3a1 1 0 0 0 1.42 1.4L19 13.42l2.3 2.3a1 1 0 0 0 1.4-1.42L20.42 12l2.3-2.3a1 1 0 0 0 0-1.4Z",
            className: d,
        }),
    });
};
