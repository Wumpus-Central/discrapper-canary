i.d(t, { d: () => o });
var a = i(477900);
i(582128);
var l = i(661531),
    n = i(996682),
    s = i(27989);
function o(e) {
    let {
            size: t = "md",
            width: i,
            height: o,
            color: r = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        h = (0, s.J)(t),
        u = h?.width ?? i,
        p = h?.height ?? o;
    return (0, a.jsx)("svg", {
        ...(0, n.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M15 11a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5ZM2 20c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5ZM13 20c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5ZM2 9c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5Z",
            className: c,
        }),
    });
}
