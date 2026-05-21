o.d(t, { f: () => n });
var e = o(627968);
o(64700);
var i = o(661531),
    s = o(996682),
    l = o(27989);
let n = (r) => {
    let {
            size: t = "md",
            width: o,
            height: n,
            color: a = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = r,
        d = (0, l.J)(t),
        E = d?.width ?? o,
        _ = d?.height ?? n;
    return (0, e.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: E,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "m2.4 8.4 8.38-6.46a2 2 0 0 1 2.44 0l8.39 6.45a2 2 0 0 1-.79 3.54l-.32.07-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 1 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.32-.07a2 2 0 0 1-.79-3.54Z",
            className: u,
        }),
    });
};
