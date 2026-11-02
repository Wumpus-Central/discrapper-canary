a.d(t, { o: () => n });
var r = a(477900);
a(582128);
var s = a(661531),
    i = a(996682),
    c = a(27989);
function n(e) {
    let {
            size: t = "md",
            width: a,
            height: n,
            color: d = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: l = "",
            ...o
        } = e,
        u = (0, c.J)(t),
        h = u?.width ?? a,
        f = u?.height ?? n;
    return (0, r.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z",
            clipRule: "evenodd",
            className: l,
        }),
    });
}
