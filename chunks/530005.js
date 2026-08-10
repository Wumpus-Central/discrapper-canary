s.d(a, { F: () => d });
var e = s(477900);
s(582128);
var t = s(661531),
    i = s(996682),
    h = s(27989);
function d(l) {
    let {
            size: a = "md",
            width: s,
            height: d,
            color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...o
        } = l,
        r = (0, h.J)(a),
        v = r?.width ?? s,
        w = r?.height ?? d;
    return (0, e.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
}
