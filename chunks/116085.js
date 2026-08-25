i.d(s, { B: () => c });
var t = i(477900);
i(582128);
var d = i(661531),
    h = i(996682),
    l = i(27989);
function c(e) {
    let {
            size: s = "md",
            width: i,
            height: c,
            color: n = d.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = e,
        p = (0, l.J)(s),
        r = p?.width ?? i,
        w = p?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, h.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
            clipRule: "evenodd",
            className: a,
        }),
    });
}
