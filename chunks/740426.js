e.d(s, { k: () => d });
var h = e(477900);
e(582128);
var i = e(661531),
    l = e(996682),
    t = e(27989);
function d(a) {
    let {
            size: s = "md",
            width: e,
            height: d,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = a,
        o = (0, t.J)(s),
        r = o?.width ?? e,
        w = o?.height ?? d;
    return (0, h.jsxs)("svg", {
        ...(0, l.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, h.jsx)("path", {
                fillRule: "evenodd",
                d: "M18.5 23c.88 0 1.7-.25 2.4-.69l1.4 1.4a1 1 0 0 0 1.4-1.42l-1.39-1.4A4.5 4.5 0 1 0 18.5 23Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
                clipRule: "evenodd",
                fill: "string" == typeof c ? c : c.css,
                className: n,
            }),
            (0, h.jsx)("path", {
                d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z",
                fill: "string" == typeof c ? c : c.css,
                className: n,
            }),
        ],
    });
}
