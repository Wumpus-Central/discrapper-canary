n.d(t, { a: () => o });
var s = n(477900);
n(582128);
var i = n(661531),
    l = n(996682),
    a = n(27989);
function o(e) {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: u = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...c
        } = e,
        d = (0, a.J)(t),
        E = d?.width ?? n,
        _ = d?.height ?? o;
    return (0, s.jsx)("svg", {
        ...(0, l.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: E,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M16.94 19.06a1.5 1.5 0 1 0 2.12-2.12L14.12 12l4.94-4.94a1.5 1.5 0 1 0-2.12-2.12L12 9.88 7.06 4.94a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-4.94 4.94a1.5 1.5 0 1 0 2.12 2.12L12 14.12l4.94 4.94Z",
            className: r,
        }),
    });
}
