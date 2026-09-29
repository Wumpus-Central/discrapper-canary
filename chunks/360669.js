s.d(e, { B: () => d });
var a = s(477900);
s(582128);
var i = s(661531),
    t = s(996682),
    c = s(27989);
function d(h) {
    let {
            size: e = "md",
            width: s,
            height: d,
            color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...o
        } = h,
        p = (0, c.J)(e),
        r = p?.width ?? s,
        v = p?.height ?? d;
    return (0, a.jsx)("svg", {
        ...(0, t.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M0 6c0-1.1 1.07-2 2.4-2h19.2c1.32 0 2.4.9 2.4 2v1H0V6ZM2.4 20C1.07 20 0 19.1 0 18v-8h24v8c0 1.1-1.08 2-2.4 2H2.4ZM18 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM3 13a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",
            clipRule: "evenodd",
            className: n,
        }),
    });
}
