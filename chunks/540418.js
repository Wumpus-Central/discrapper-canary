l.d(s, { A: () => w });
var e = l(627968);
l(64700);
var h = l(661531),
    i = l(996682),
    r = l(27989);
let w = (t) => {
    let {
            size: s = "md",
            width: l,
            height: w,
            color: c = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = t,
        d = (0, r.J)(s),
        n = d?.width ?? l,
        g = d?.height ?? w;
    return (0, e.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M10.16 4.06a2.13 2.13 0 0 1 3.68 0l8 13.77c.81 1.41-.2 3.17-1.84 3.17H4a2.11 2.11 0 0 1-1.84-3.17l8-13.77Z",
            className: a,
        }),
    });
};
