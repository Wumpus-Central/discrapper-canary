n.d(t, { k: () => o });
var a = n(627968);
n(64700);
var i = n(661531),
    l = n(996682),
    r = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: s = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, r.J)(t),
        _ = u?.width ?? n,
        p = u?.height ?? o;
    return (0, a.jsxs)("svg", {
        ...(0, l.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, a.jsx)("path", {
                fillRule: "evenodd",
                d: "M18.5 23c.88 0 1.7-.25 2.4-.69l1.4 1.4a1 1 0 0 0 1.4-1.42l-1.39-1.4A4.5 4.5 0 1 0 18.5 23Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
                clipRule: "evenodd",
                fill: "string" == typeof s ? s : s.css,
                className: c,
            }),
            (0, a.jsx)("path", {
                d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z",
                fill: "string" == typeof s ? s : s.css,
                className: c,
            }),
        ],
    });
};
