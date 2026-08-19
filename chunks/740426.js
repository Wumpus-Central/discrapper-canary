n.d(t, { k: () => r });
var i = n(477900);
n(582128);
var s = n(661531),
    a = n(996682),
    l = n(27989);
function r(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: E = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = e,
        d = (0, l.J)(t),
        _ = d?.width ?? n,
        S = d?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: S,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fillRule: "evenodd",
                d: "M18.5 23c.88 0 1.7-.25 2.4-.69l1.4 1.4a1 1 0 0 0 1.4-1.42l-1.39-1.4A4.5 4.5 0 1 0 18.5 23Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
                clipRule: "evenodd",
                fill: "string" == typeof E ? E : E.css,
                className: o,
            }),
            (0, i.jsx)("path", {
                d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z",
                fill: "string" == typeof E ? E : E.css,
                className: o,
            }),
        ],
    });
}
