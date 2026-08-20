a.d(s, { VideoIcon: () => d });
var t = a(477900);
a(582128);
var i = a(661531),
    E = a(996682),
    p = a(27989);
function d(e) {
    let {
            size: s = "md",
            width: a,
            height: d,
            color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...A
        } = e,
        n = (0, p.J)(s),
        I = n?.width ?? a,
        S = n?.height ?? d;
    return (0, t.jsx)("svg", {
        ...(0, E.A)(A),
        xmlns: "http://www.w3.org/2000/svg",
        width: I,
        height: S,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M4 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-2.12a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 1.45-.9V7.62a1 1 0 0 0-1.45-.9l-3 1.5a1 1 0 0 0-.55.9V7a3 3 0 0 0-3-3H4Z",
            className: h,
        }),
    });
}
