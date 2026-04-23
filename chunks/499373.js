n.d(t, { T: () => i });
var l = n(627968);
n(64700);
var s = n(827734),
    a = n(996682),
    r = n(27989);
let i = (e) => {
    let {
            size: t = "md",
            width: n,
            height: i,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...d
        } = e,
        c = (0, r.J)(t),
        p = c?.width ?? n,
        m = c?.height ?? i;
    return (0, l.jsx)("svg", {
        ...(0, a.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z",
            className: u,
        }),
    });
};
