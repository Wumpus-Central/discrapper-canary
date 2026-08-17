n.d(t, { RetryIcon: () => u });
var r = n(477900);
n(582128);
var l = n(661531),
    a = n(996682),
    i = n(27989);
function u(e) {
    let {
            size: t = "md",
            width: n,
            height: u,
            color: s = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = e,
        d = (0, i.J)(t),
        m = d?.width ?? n,
        f = d?.height ?? u;
    return (0, r.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
            className: o,
        }),
    });
}
