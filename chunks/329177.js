(t.r(n), t.d(n, { CrownIcon: () => s }));
var l = t(477900);
t(582128);
var a = t(661531),
    r = t(996682),
    i = t(27989);
function s(e) {
    let {
            size: n = "md",
            width: t,
            height: s,
            color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...d
        } = e,
        c = (0, i.J)(n),
        f = c?.width ?? t,
        m = c?.height ?? s;
    return (0, l.jsx)("svg", {
        ...(0, r.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: f,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M5 18a1 1 0 0 0-1 1 3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 1 1 0 0 0-1-1H5ZM3.04 7.76a1 1 0 0 0-1.52 1.15l2.25 6.42a1 1 0 0 0 .94.67h14.55a1 1 0 0 0 .95-.71l1.94-6.45a1 1 0 0 0-1.55-1.1l-4.11 3-3.55-5.33.82-.82a.83.83 0 0 0 0-1.18l-1.17-1.17a.83.83 0 0 0-1.18 0l-1.17 1.17a.83.83 0 0 0 0 1.18l.82.82-3.61 5.42-4.41-3.07Z",
            className: u,
        }),
    });
}
