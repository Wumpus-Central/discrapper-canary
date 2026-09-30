n.d(t, { h: () => o });
var r = n(477900);
n(582128);
var u = n(661531),
    l = n(996682),
    i = n(27989);
function o(e) {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: s = u.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...c
        } = e,
        d = (0, i.J)(t),
        f = d?.width ?? n,
        A = d?.height ?? o;
    return (0, r.jsx)("svg", {
        ...(0, l.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: f,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M14 4a5 5 0 0 1 5 5v.2A5.5 5.5 0 0 1 17.5 20H5a4 4 0 0 1-.85-7.9 4 4 0 0 1 5.18-4.87A5 5 0 0 1 14 4Z",
            className: a,
        }),
    });
}
