t.d(l, { L: () => c });
var e = t(627968);
t(64700);
var s = t(661531),
    h = t(996682),
    i = t(27989);
let c = (a) => {
    let {
            size: l = "md",
            width: t,
            height: c,
            color: r = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = a,
        n = (0, i.J)(l),
        v = n?.width ?? t,
        g = n?.height ?? c;
    return (0, e.jsx)("svg", {
        ...(0, h.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M13.5 11.73c0-1.22.84-2.26 1.6-3.21a4 4 0 1 0-6.22 0c.78.95 1.62 1.99 1.62 3.21V13H5a3 3 0 0 0-3 3v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-5.5v-1.27ZM5 19a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H5Z",
            className: d,
        }),
    });
};
