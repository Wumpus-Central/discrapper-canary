e.d(n, { CrownIcon: () => o });
var t = e(477900);
e(582128);
var a = e(661531),
    r = e(996682),
    s = e(27989);
function o(l) {
    let {
            size: n = "md",
            width: e,
            height: o,
            color: i = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = l,
        d = (0, s.J)(n),
        h = d?.width ?? e,
        A = d?.height ?? o;
    return (0, t.jsx)("svg", {
        ...(0, r.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M5 18a1 1 0 0 0-1 1 3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 1 1 0 0 0-1-1H5ZM3.04 7.76a1 1 0 0 0-1.52 1.15l2.25 6.42a1 1 0 0 0 .94.67h14.55a1 1 0 0 0 .95-.71l1.94-6.45a1 1 0 0 0-1.55-1.1l-4.11 3-3.55-5.33.82-.82a.83.83 0 0 0 0-1.18l-1.17-1.17a.83.83 0 0 0-1.18 0l-1.17 1.17a.83.83 0 0 0 0 1.18l.82.82-3.61 5.42-4.41-3.07Z",
            className: u,
        }),
    });
}
