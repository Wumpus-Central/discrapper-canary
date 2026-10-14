a.d(e, { N: () => o });
var n = a(477900);
a(582128);
var t = a(661531),
    i = a(996682),
    d = a(27989);
function o(l) {
    let {
            size: e = "md",
            width: a,
            height: o,
            color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...c
        } = l,
        u = (0, d.J)(e),
        h = u?.width ?? a,
        m = u?.height ?? o;
    return (0, n.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm5.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.8-1.17a1 1 0 0 1-1.39-.27 3.5 3.5 0 0 0-5.82 0 1 1 0 1 1-1.66-1.12 5.5 5.5 0 0 1 9.14 0 1 1 0 0 1-.27 1.4Z",
            clipRule: "evenodd",
            className: s,
        }),
    });
}
