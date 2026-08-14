i.d(s, { g: () => d });
var l = i(477900);
i(582128);
var t = i(661531),
    a = i(996682),
    h = i(27989);
function d(e) {
    let {
            size: s = "md",
            width: i,
            height: d,
            color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...o
        } = e,
        p = (0, h.J)(s),
        r = p?.width ?? i,
        w = p?.height ?? d;
    return (0, l.jsx)("svg", {
        ...(0, a.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M12.24 2a3 3 0 0 0-2.12.88l-8.25 8.25a3 3 0 0 0 0 4.24l6.76 6.76a3 3 0 0 0 4.24 0l8.25-8.25a3 3 0 0 0 .88-2.12V4a2 2 0 0 0-2-2h-7.76ZM17 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
}
