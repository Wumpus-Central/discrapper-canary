a.d(l, { t: () => r });
var t = a(627968);
a(64700);
var o = a(661531),
    n = a(996682),
    i = a(27989);
let r = (e) => {
    let {
            size: l = "md",
            width: a,
            height: r,
            color: s = o.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...u
        } = e,
        c = (0, i.J)(l),
        b = c?.width ?? a,
        p = c?.height ?? r;
    return (0, t.jsx)("svg", {
        ...(0, n.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: b,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M19.38 11.38a3 3 0 0 0 4.24 0l.03-.03a.5.5 0 0 0 0-.7L13.35.35a.5.5 0 0 0-.7 0l-.03.03a3 3 0 0 0 0 4.24L13 5l-2.92 2.92-3.65-.34a2 2 0 0 0-1.6.58l-.62.63a1 1 0 0 0 0 1.42l9.58 9.58a1 1 0 0 0 1.42 0l.63-.63a2 2 0 0 0 .58-1.6l-.34-3.64L19 11l.38.38ZM9.07 17.07a.5.5 0 0 1-.08.77l-5.15 3.43a.5.5 0 0 1-.63-.06l-.42-.42a.5.5 0 0 1-.06-.63L6.16 15a.5.5 0 0 1 .77-.08l2.14 2.14Z",
            className: d,
        }),
    });
};
