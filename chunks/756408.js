t.d(a, { o: () => c });
var l = t(477900);
t(582128);
var i = t(661531),
    e = t(996682),
    h = t(27989);
function c(s) {
    let {
            size: a = "md",
            width: t,
            height: c,
            color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = s,
        o = (0, h.J)(a),
        w = o?.width ?? t,
        p = o?.height ?? c;
    return (0, l.jsx)("svg", {
        ...(0, e.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
}
