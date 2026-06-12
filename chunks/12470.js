n.d(t, { _: () => a });
var i = n(627968);
n(64700);
var l = n(661531),
    s = n(996682),
    r = n(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...d
        } = e,
        c = (0, r.J)(t),
        h = c?.width ?? n,
        g = c?.height ?? a;
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M9 22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l4.3-4.3a1 1 0 0 1 1.4 1.42L4.42 21H8a1 1 0 0 1 1 1Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M19 22a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6a1 1 0 1 0 2 0V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a1 1 0 1 0 0 2h6Z",
                className: u,
            }),
        ],
    });
};
