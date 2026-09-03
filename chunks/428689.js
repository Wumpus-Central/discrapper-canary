a.d(s, { VideoIcon: () => l });
var i = a(477900);
a(582128);
var t = a(661531),
    d = a(996682),
    p = a(27989);
function l(e) {
    let {
            size: s = "md",
            width: a,
            height: l,
            color: E = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...n
        } = e,
        A = (0, p.J)(s),
        I = A?.width ?? a,
        r = A?.height ?? l;
    return (0, i.jsx)("svg", {
        ...(0, d.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: I,
        height: r,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof E ? E : E.css,
            d: "M4 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-2.12a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 1.45-.9V7.62a1 1 0 0 0-1.45-.9l-3 1.5a1 1 0 0 0-.55.9V7a3 3 0 0 0-3-3H4Z",
            className: h,
        }),
    });
}
