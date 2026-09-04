i.d(a, { VideoIcon: () => d });
var t = i(477900);
i(582128);
var h = i(661531),
    e = i(996682),
    c = i(27989);
function d(s) {
    let {
            size: a = "md",
            width: i,
            height: d,
            color: l = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...o
        } = s,
        r = (0, c.J)(a),
        p = r?.width ?? i,
        w = r?.height ?? d;
    return (0, t.jsx)("svg", {
        ...(0, e.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M4 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-2.12a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 1.45-.9V7.62a1 1 0 0 0-1.45-.9l-3 1.5a1 1 0 0 0-.55.9V7a3 3 0 0 0-3-3H4Z",
            className: n,
        }),
    });
}
