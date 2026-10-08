s.d(t, { l: () => d });
var c = s(477900);
s(582128);
var i = s(661531),
    a = s(996682),
    l = s(27989);
function d(e) {
    let {
            size: t = "md",
            width: s,
            height: d,
            color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...f
        } = e,
        h = (0, l.J)(t),
        o = h?.width ?? s,
        p = h?.height ?? d;
    return (0, c.jsxs)("svg", {
        ...(0, a.A)(f),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, c.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                d: "M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2 20.53A9.53 9.53 0 0 1 11.53 11h.94c1.28 0 2.5.25 3.61.7.41.18.36.77-.05.96a7 7 0 0 0-3.65 8.6c.11.36-.13.74-.5.74H6.15a.5.5 0 0 1-.5-.55l.27-2.6c.02-.26-.27-.37-.41-.16-.48.74-1.03 1.8-1.32 2.9a.53.53 0 0 1-.5.41h-.22C2.66 22 2 21.34 2 20.53Z",
                className: r,
            }),
            (0, c.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                fillRule: "evenodd",
                d: "M19 24a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm1-7a1 1 0 1 0-2 0v2c0 .27.1.52.3.7l1 1a1 1 0 0 0 1.4-1.4l-.7-.71V17Z",
                clipRule: "evenodd",
                className: r,
            }),
        ],
    });
}
