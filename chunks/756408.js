n.d(t, { o: () => i });
var r = n(477900);
n(582128);
var a = n(661531),
    s = n(996682),
    l = n(27989);
function i(e) {
    let {
            size: t = "md",
            width: n,
            height: i,
            color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...u
        } = e,
        d = (0, l.J)(t),
        m = d?.width ?? n,
        h = d?.height ?? i;
    return (0, r.jsx)("svg", {
        ...(0, s.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            fillRule: "evenodd",
            d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z",
            clipRule: "evenodd",
            className: o,
        }),
    });
}
