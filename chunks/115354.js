l.d(t, { O: () => a });
var i = l(627968);
l(64700);
var r = l(827734),
    s = l(996682),
    n = l(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: l,
            height: a,
            color: h = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = e,
        d = (0, n.J)(t),
        u = d?.width ?? l,
        p = d?.height ?? a;
    return (0, i.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            fillRule: "evenodd",
            d: "M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM5 15v2h2v-2H5Zm4 0v2h2v-2H9Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2ZM7 13v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2ZM5 11v2h2v-2H5Zm4 0v2h2v-2H9Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
            clipRule: "evenodd",
            className: o,
        }),
    });
};
