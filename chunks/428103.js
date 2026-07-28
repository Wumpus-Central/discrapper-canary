r.d(t, { l: () => s });
var i = r(627968);
r(64700);
var l = r(661531),
    n = r(996682),
    a = r(27989);
function s(e) {
    let {
            size: t = "md",
            width: r,
            height: s,
            color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...o
        } = e,
        u = (0, a.J)(t),
        h = u?.width ?? r,
        m = u?.height ?? s;
    return (0, i.jsx)("svg", {
        ...(0, n.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M4 4a1 1 0 0 0 0 2h16a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a1 1 0 1 1 0 2H4Zm15.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
}
