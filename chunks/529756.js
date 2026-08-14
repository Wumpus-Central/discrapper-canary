n.d(t, { c: () => a });
var i = n(477900);
n(582128);
var r = n(661531),
    s = n(996682),
    l = n(27989);
function a(e) {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: c = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
        } = e,
        u = (0, l.J)(t),
        m = u?.width ?? n,
        p = u?.height ?? a;
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M1.71 7.8c-.5.12-.8.62-.68 1.12l2.64 10.87c.12.5.63.8 1.13.68l3.28-.8a2.8 2.8 0 0 1-2.06-2.64L5.82 6.8l-4.1 1ZM8.59 4.86a.93.93 0 0 0-.92.95L7.88 17c.01.51.44.92.95.91l4.83-.09-1.24-.3a2.8 2.8 0 0 1-2.06-3.38l2.27-9.35-4.04.07Z",
                className: o,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M22.97 5.7c.12-.5-.18-1.01-.68-1.13l-6.35-1.54a.93.93 0 0 0-1.12.68l-2.65 10.87c-.12.5.19 1 .69 1.13l6.34 1.54c.5.12 1-.19 1.13-.69L22.97 5.7Z",
                className: o,
            }),
        ],
    });
}
