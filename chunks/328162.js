i.d(s, { w: () => l });
var a = i(477900);
i(582128);
var h = i(661531),
    t = i(996682),
    d = i(27989);
function l(e) {
    let {
            size: s = "md",
            width: i,
            height: l,
            color: n = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...o
        } = e,
        p = (0, d.J)(s),
        r = p?.width ?? i,
        v = p?.height ?? l;
    return (0, a.jsx)("svg", {
        ...(0, t.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M8.7 2.25A4.98 4.98 0 0 1 17 6v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h9V6a3 3 0 0 0-4.98-2.25 1 1 0 0 1-1.33-1.5ZM14 14a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
}
