s.d(e, { F: () => d });
var t = s(627968);
s(64700);
var a = s(661531),
    i = s(996682),
    h = s(27989);
let d = (l) => {
    let {
            size: e = "md",
            width: s,
            height: d,
            color: r = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...n
        } = l,
        o = (0, h.J)(e),
        w = o?.width ?? s,
        p = o?.height ?? d;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
};
