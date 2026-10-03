n.d(t, { x: () => l });
var i = n(477900);
n(582128);
var r = n(661531),
    a = n(996682),
    s = n(27989);
function l(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, s.J)(t),
        _ = u?.width ?? n,
        E = u?.height ?? l;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M9.55 10.88a2 2 0 0 1 2.89-2.09l8.47 4.36a2 2 0 0 1-.6 3.76l-2.78.43a2 2 0 0 0-1.47 1.07l-1.28 2.5a2 2 0 0 1-3.76-.6l-1.47-9.43ZM9.96 2a1.25 1.25 0 0 0 0 2.5h1.37a1.25 1.25 0 0 0 0-2.5H9.96ZM2 5.26v.21a1.25 1.25 0 1 0 2.5 0v-.21c0-.42.34-.75.75-.75h.21a1.25 1.25 0 0 0 0-2.5h-.21A3.25 3.25 0 0 0 2 5.25ZM2 11.35a1.25 1.25 0 1 0 2.5 0V9.98a1.25 1.25 0 1 0-2.5 0v1.37ZM5.25 19.33h.21a1.25 1.25 0 0 0 0-2.5h-.21a.75.75 0 0 1-.75-.76v-.21a1.25 1.25 0 1 0-2.5 0v.21c0 1.8 1.45 3.26 3.25 3.26ZM16.05 2h-.22a1.25 1.25 0 0 0 0 2.5h.22c.41 0 .75.34.75.76v.21a1.25 1.25 0 1 0 2.5 0v-.21c0-1.8-1.46-3.26-3.25-3.26Z",
            className: d,
        }),
    });
}
