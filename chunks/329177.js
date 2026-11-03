(n.r(t), n.d(t, { CrownIcon: () => s }));
var l = n(477900);
n(582128);
var r = n(661531),
    a = n(996682),
    i = n(27989);
function s(e) {
    let {
            size: t = "md",
            width: n,
            height: s,
            color: u = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = e,
        d = (0, i.J)(t),
        f = d?.width ?? n,
        m = d?.height ?? s;
    return (0, l.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: f,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M5 18a1 1 0 0 0-1 1 3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 1 1 0 0 0-1-1H5ZM3.04 7.76a1 1 0 0 0-1.52 1.15l2.25 6.42a1 1 0 0 0 .94.67h14.55a1 1 0 0 0 .95-.71l1.94-6.45a1 1 0 0 0-1.55-1.1l-4.11 3-3.55-5.33.82-.82a.83.83 0 0 0 0-1.18l-1.17-1.17a.83.83 0 0 0-1.18 0l-1.17 1.17a.83.83 0 0 0 0 1.18l.82.82-3.61 5.42-4.41-3.07Z",
            className: o,
        }),
    });
}
