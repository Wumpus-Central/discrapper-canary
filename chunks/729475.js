s.d(h, { T: () => r });
var t = s(477900);
s(582128);
var i = s(661531),
    c = s(996682),
    e = s(27989);
function r(a) {
    let {
            size: h = "md",
            width: s,
            height: r,
            color: v = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...n
        } = a,
        p = (0, e.J)(h),
        l = p?.width ?? s,
        o = p?.height ?? r;
    return (0, t.jsx)("svg", {
        ...(0, c.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: l,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof v ? v : v.css,
            d: "M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM18 4a2 2 0 0 1 2 2v3a1 1 0 1 0 2 0V6a4 4 0 0 0-4-4h-3a1 1 0 1 0 0 2h3ZM20 18a2 2 0 0 1-2 2h-3a1 1 0 1 0 0 2h3a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3Z",
            className: d,
        }),
    });
}
