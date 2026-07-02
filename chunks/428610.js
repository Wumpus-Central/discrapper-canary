l.d(t, { K: () => r });
var n = l(627968);
l(64700);
var a = l(661531),
    i = l(996682),
    s = l(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: l,
            height: r,
            color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...u
        } = e,
        d = (0, s.J)(t),
        m = d?.width ?? l,
        h = d?.height ?? r;
    return (0, n.jsxs)("svg", {
        ...(0, i.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M7 2a1 1 0 0 0-2 0v3H2a1 1 0 1 0 0 2h3v8a4 4 0 0 0 4 4h8v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2V2Z",
                className: o,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M9 7h6a2 2 0 0 1 2 2v6h2V9a4 4 0 0 0-4-4H9v2Z",
                className: o,
            }),
        ],
    });
};
