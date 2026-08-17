h.d(s, { ShareIcon: () => c });
var t = h(477900);
h(582128);
var i = h(661531),
    e = h(996682),
    l = h(27989);
function c(a) {
    let {
            size: s = "md",
            width: h,
            height: c,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = a,
        d = (0, l.J)(s),
        o = d?.width ?? h,
        v = d?.height ?? c;
    return (0, t.jsxs)("svg", {
        ...(0, e.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0Z",
                className: n,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M4 15a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
                className: n,
            }),
        ],
    });
}
