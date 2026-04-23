a.d(l, { N: () => r });
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
            fillRule: "evenodd",
            d: "M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
};
