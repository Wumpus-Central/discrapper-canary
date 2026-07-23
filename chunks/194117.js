i.d(t, { f: () => E });
var n = i(627968);
i(64700);
var l = i(661531),
    a = i(996682),
    r = i(27989);
let E = (e) => {
    let {
            size: t = "md",
            width: i,
            height: E,
            color: s = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...h
        } = e,
        c = (0, r.J)(t),
        o = c?.width ?? i,
        u = c?.height ?? E;
    return (0, n.jsx)("svg", {
        ...(0, a.A)(h),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: u,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2H3ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM2 8a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 0 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H3Z",
            fill: "string" == typeof s ? s : s.css,
            className: d,
        }),
    });
};
