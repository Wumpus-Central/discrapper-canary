t.d(s, { F: () => d });
var a = t(477900);
t(582128);
var e = t(661531),
    i = t(996682),
    h = t(27989);
function d(l) {
    let {
            size: s = "md",
            width: t,
            height: d,
            color: n = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...c
        } = l,
        o = (0, h.J)(s),
        w = o?.width ?? t,
        p = o?.height ?? d;
    return (0, a.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
}
