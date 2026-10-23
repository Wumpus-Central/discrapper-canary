(i.r(a), i.d(a, { VideoIcon: () => c }));
var t = i(477900);
i(582128);
var h = i(661531),
    e = i(996682),
    r = i(27989);
function c(s) {
    let {
            size: a = "md",
            width: i,
            height: c,
            color: d = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: l = "",
            ...n
        } = s,
        o = (0, r.J)(a),
        p = o?.width ?? i,
        w = o?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, e.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M4 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-2.12a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 1.45-.9V7.62a1 1 0 0 0-1.45-.9l-3 1.5a1 1 0 0 0-.55.9V7a3 3 0 0 0-3-3H4Z",
            className: l,
        }),
    });
}
