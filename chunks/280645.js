l.d(t, { H: () => n });
var a = l(477900);
l(582128);
var s = l(661531),
    r = l(996682),
    i = l(27989);
function n(e) {
    let {
            size: t = "md",
            width: l,
            height: n,
            color: c = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = e,
        h = (0, i.J)(t),
        u = h?.width ?? l,
        v = h?.height ?? n;
    return (0, a.jsxs)("svg", {
        ...(0, r.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, a.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M7.71 9.1a2.06 2.06 0 1 1 0 4.12 2.06 2.06 0 0 1 0-4.13Z",
                className: d,
            }),
            (0, a.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M21 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h18ZM4.78 6.88a2 2 0 0 0-2 2v7c0 .26.03.48.08.66.15.5.8.3 1.02-.18A3.89 3.89 0 0 1 7.59 14h.24c1.62 0 2.9.77 3.59 2.33.21.48.9.7 1.04.2.04-.18.07-.4.07-.66v-7a2 2 0 0 0-2-2H4.78Zm11.15 7.85a1 1 0 0 0 0 2h4.37a1 1 0 1 0 0-2h-4.37Zm0-3.4a1 1 0 0 0 0 2h4.37a1 1 0 1 0 0-2h-4.37Zm0-3.4a1 1 0 0 0 0 2h2.69a1 1 0 0 0 0-2h-2.69Z",
                clipRule: "evenodd",
                className: d,
            }),
        ],
    });
}
