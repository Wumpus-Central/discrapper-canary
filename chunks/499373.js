n.d(t, { T: () => s });
var a = n(627968);
n(64700);
var i = n(827734),
    l = n(996682),
    r = n(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: n,
            height: s,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        _ = (0, r.J)(t),
        u = _?.width ?? n,
        p = _?.height ?? s;
    return (0, a.jsx)("svg", {
        ...(0, l.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z",
            className: d,
        }),
    });
};
