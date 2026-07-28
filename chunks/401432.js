n.d(t, { a: () => a });
var i = n(627968);
n(64700);
var l = n(661531),
    r = n(996682),
    s = n(27989);
function a(e) {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: E = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = e,
        u = (0, s.J)(t),
        _ = u?.width ?? n,
        A = u?.height ?? a;
    return (0, i.jsx)("svg", {
        ...(0, r.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof E ? E : E.css,
            d: "M16.94 19.06a1.5 1.5 0 1 0 2.12-2.12L14.12 12l4.94-4.94a1.5 1.5 0 1 0-2.12-2.12L12 9.88 7.06 4.94a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-4.94 4.94a1.5 1.5 0 1 0 2.12 2.12L12 14.12l4.94 4.94Z",
            className: o,
        }),
    });
}
