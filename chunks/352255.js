l.d(t, { X: () => i });
var n = l(627968);
l(64700);
var a = l(661531),
    r = l(996682),
    s = l(27989);
let i = (e) => {
    let {
            size: t = "md",
            width: l,
            height: i,
            color: u = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = e,
        d = (0, s.J)(t),
        h = d?.width ?? l,
        x = d?.height ?? i;
    return (0, n.jsx)("svg", {
        ...(0, r.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: x,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M18.45 1.85a3 3 0 0 0-4.1 1.1l-1.5 2.6a3 3 0 0 0 1.1 4.1l2.6 1.5a3 3 0 0 0 4.1-1.1l1.5-2.6a3 3 0 0 0-1.1-4.1l-2.6-1.5ZM2 5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5ZM2 16a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
            className: o,
        }),
    });
};
