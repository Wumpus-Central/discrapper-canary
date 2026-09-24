n.d(e, { _: () => s });
var t = n(477900);
n(582128);
var r = n(661531),
    a = n(996682),
    o = n(27989);
function s(l) {
    let {
            size: e = "md",
            width: n,
            height: s,
            color: i = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = l,
        d = (0, o.J)(e),
        h = d?.width ?? n,
        A = d?.height ?? s;
    return (0, t.jsx)("svg", {
        ...(0, a.A)(c),
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
