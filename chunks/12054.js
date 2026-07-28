i.d(t, { y: () => l });
var s = i(477900);
i(582128);
var c = i(661531),
    n = i(996682),
    r = i(27989);
function l(e) {
    let {
            size: t = "md",
            width: i,
            height: l,
            color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = e,
        g = (0, r.J)(t),
        u = g?.width ?? i,
        v = g?.height ?? l;
    return (0, s.jsx)("svg", {
        ...(0, n.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M11.62 2.08a1 1 0 0 1 1.09.21l5 5a1 1 0 0 1-.09 1.5L13.6 12l4.02 3.22a1 1 0 0 1 .09 1.49l-5 5A1 1 0 0 1 11 21v-6.92l-3.38 2.7a1 1 0 0 1-1.24-1.56L10.4 12 6.38 8.78a1 1 0 0 1 1.24-1.56L11 9.92V3a1 1 0 0 1 .62-.92Zm1.38 12 2.5 2-2.5 2.5v-4.5Zm0-4.16v-4.5l2.5 2.5-2.5 2Z",
            clipRule: "evenodd",
            className: a,
        }),
    });
}
