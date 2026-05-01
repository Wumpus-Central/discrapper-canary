e.d(i, { f: () => s });
var l = e(627968);
e(64700);
var r = e(661531),
    o = e(996682),
    n = e(27989);
let s = (t) => {
    let {
            size: i = "md",
            width: e,
            height: s,
            color: a = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
        } = t,
        d = (0, n.J)(i),
        h = d?.width ?? e,
        f = d?.height ?? s;
    return (0, l.jsx)("svg", {
        ...(0, o.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "m2.4 8.4 8.38-6.46a2 2 0 0 1 2.44 0l8.39 6.45a2 2 0 0 1-.79 3.54l-.32.07-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 1 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.32-.07a2 2 0 0 1-.79-3.54Z",
            className: p,
        }),
    });
};
