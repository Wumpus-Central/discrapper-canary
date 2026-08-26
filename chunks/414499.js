n.d(t, { h: () => l });
var i = n(477900);
n(582128);
var r = n(661531),
    s = n(996682),
    o = n(27989);
function l(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: a = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...d
        } = e,
        c = (0, o.J)(t),
        C = c?.width ?? n,
        f = c?.height ?? l;
    return (0, i.jsx)("svg", {
        ...(0, s.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: C,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M14 4a5 5 0 0 1 5 5v.2A5.5 5.5 0 0 1 17.5 20H5a4 4 0 0 1-.85-7.9 4 4 0 0 1 5.18-4.87A5 5 0 0 1 14 4Z",
            className: u,
        }),
    });
}
