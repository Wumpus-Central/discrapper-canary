i.d(t, { v: () => r });
var h = i(477900);
i(582128);
var c = i(661531),
    l = i(996682),
    e = i(27989);
function r(s) {
    let {
            size: t = "md",
            width: i,
            height: r,
            color: a = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...n
        } = s,
        p = (0, e.J)(t),
        o = p?.width ?? i,
        w = p?.height ?? r;
    return (0, h.jsx)("svg", {
        ...(0, l.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4Z",
            className: d,
        }),
    });
}
