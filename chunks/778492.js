s.d(a, { k: () => h });
var c = s(477900);
s(582128);
var e = s(661531),
    t = s(996682),
    i = s(27989);
function h(l) {
    let {
            size: a = "md",
            width: s,
            height: h,
            color: n = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = l,
        v = (0, i.J)(a),
        r = v?.width ?? s,
        f = v?.height ?? h;
    return (0, c.jsxs)("svg", {
        ...(0, t.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, c.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                fillRule: "evenodd",
                d: "M19.56 2a3 3 0 0 0-2.46 1.28 3.85 3.85 0 0 1-1.86 1.42l-8.9 3.18a.5.5 0 0 0-.34.47v10.09a3 3 0 0 0 2.27 2.9l.62.16c1.57.4 3.15-.56 3.55-2.12a.92.92 0 0 1 1.23-.63l2.36.94c.42.27.79.62 1.07 1.03A3 3 0 0 0 19.56 22h.94c.83 0 1.5-.67 1.5-1.5v-17c0-.83-.67-1.5-1.5-1.5h-.94Zm-8.53 15.8L8 16.7v1.73a1 1 0 0 0 .76.97l.62.15c.5.13 1-.17 1.12-.67.1-.41.29-.78.53-1.1Z",
                clipRule: "evenodd",
                className: d,
            }),
            (0, c.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                d: "M2 10c0-1.1.9-2 2-2h.5c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-4Z",
                className: d,
            }),
        ],
    });
}
