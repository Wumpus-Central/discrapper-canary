e.d(n, { _: () => o });
var t = e(477900);
e(582128);
var a = e(661531),
    r = e(996682),
    s = e(27989);
function o(l) {
    let {
            size: n = "md",
            width: e,
            height: o,
            color: i = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = l,
        d = (0, s.J)(n),
        h = d?.width ?? e,
        A = d?.height ?? o;
    return (0, t.jsx)("svg", {
        ...(0, r.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M14 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.41l-5.3 5.3a1 1 0 0 1-1.4-1.42L18.58 4H15a1 1 0 0 1-1-1ZM5.41 20H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l5.3-5.3a1 1 0 0 1 1.4 1.42L5.42 20Z",
            className: u,
        }),
    });
}
