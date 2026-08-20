e.d(l, { T: () => o });
var n = e(477900);
e(582128);
var a = e(661531),
    i = e(996682),
    s = e(27989);
function o(t) {
    let {
            size: l = "md",
            width: e,
            height: o,
            color: r = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...p
        } = t,
        d = (0, s.J)(l),
        c = d?.width ?? e,
        A = d?.height ?? o;
    return (0, n.jsx)("svg", {
        ...(0, i.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M8.65 1.51A2 2 0 0 0 6 3.41v9.88A3.98 3.98 0 0 0 4.5 13C2.57 13 1 14.34 1 16s1.57 3 3.5 3S8 17.66 8 16V5.4l11 3.81v7.08a3.98 3.98 0 0 0-1.5-.29c-1.93 0-3.5 1.34-3.5 3s1.57 3 3.5 3 3.5-1.34 3.5-3V7.03c0-.74-.47-1.4-1.18-1.65L8.65 1.51Z",
            className: u,
        }),
    });
}
