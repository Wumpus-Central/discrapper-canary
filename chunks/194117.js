n.d(t, { f: () => s });
var i = n(477900);
n(582128);
var l = n(661531),
    a = n(996682),
    r = n(27989);
function s(e) {
    let {
            size: t = "md",
            width: n,
            height: s,
            color: E = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = e,
        u = (0, r.J)(t),
        c = u?.width ?? n,
        h = u?.height ?? s;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2H3ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM2 8a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 0 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H3Z",
            fill: "string" == typeof E ? E : E.css,
            className: d,
        }),
    });
}
