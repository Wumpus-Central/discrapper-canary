n.d(t, { Q: () => o });
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
            color: u = i.A.colors.ICON_FEEDBACK_POSITIVE,
            colorClass: r = "",
            ...c
        } = e,
        d = (0, a.J)(t),
        E = d?.width ?? n,
        _ = d?.height ?? o;
    return (0, s.jsxs)("svg", {
        ...(0, l.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: E,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, s.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                d: "M2 3a1 1 0 0 1 1-1 19 19 0 0 1 19 19 1 1 0 1 1-2 0A17 17 0 0 0 3 4a1 1 0 0 1-1-1Z",
                className: r,
            }),
            (0, s.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                d: "M2 8a1 1 0 0 1 1-1 14 14 0 0 1 14 14 1 1 0 1 1-2 0A12 12 0 0 0 3 9a1 1 0 0 1-1-1Z",
                className: r,
            }),
            (0, s.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                d: "M3 12a1 1 0 1 0 0 2 7 7 0 0 1 7 7 1 1 0 1 0 2 0 9 9 0 0 0-9-9ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
                className: r,
            }),
        ],
    });
}
