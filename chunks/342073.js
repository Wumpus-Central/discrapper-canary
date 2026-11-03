n.d(t, { L: () => r });
var i = n(477900);
n(582128);
var s = n(661531),
    l = n(996682),
    a = n(27989);
function r(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...u
        } = e,
        c = (0, a.J)(t),
        m = c?.width ?? n,
        x = c?.height ?? r;
    return (0, i.jsx)("svg", {
        ...(0, l.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: x,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M7 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1ZM11 6a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V6ZM1 8a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0V8ZM16 5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0V5ZM22 8a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z",
            className: d,
        }),
    });
}
