a.d(l, { I: () => r });
var t = a(627968);
a(64700);
var n = a(827734),
    o = a(996682),
    i = a(27989);
let r = (e) => {
    let {
            size: l = "md",
            width: a,
            height: r,
            color: s = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...u
        } = e,
        c = (0, i.J)(l),
        b = c?.width ?? a,
        p = c?.height ?? r;
    return (0, t.jsx)("svg", {
        ...(0, o.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: b,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M8 5a1 1 0 0 0 0 2h7.59L5.29 17.3a1 1 0 1 0 1.42 1.4L17 8.42V16a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1H8Z",
            className: d,
        }),
    });
};
