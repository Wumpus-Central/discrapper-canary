n.d(e, { a: () => r });
var i = n(477900);
n(582128);
var a = n(661531),
    l = n(996682),
    s = n(27989);
function r(t) {
    let {
            size: e = "md",
            width: n,
            height: r,
            color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...d
        } = t,
        c = (0, s.J)(e),
        E = c?.width ?? n,
        _ = c?.height ?? r;
    return (0, i.jsx)("svg", {
        ...(0, l.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: E,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M16.94 19.06a1.5 1.5 0 1 0 2.12-2.12L14.12 12l4.94-4.94a1.5 1.5 0 1 0-2.12-2.12L12 9.88 7.06 4.94a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-4.94 4.94a1.5 1.5 0 1 0 2.12 2.12L12 14.12l4.94 4.94Z",
            className: u,
        }),
    });
}
