n.d(t, { g: () => u });
var l = n(627968);
n(64700);
var i = n(661531),
    r = n(996682),
    a = n(27989);
let u = (e) => {
    let {
            size: t = "md",
            width: n,
            height: u,
            color: s = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = e,
        d = (0, a.J)(t),
        f = d?.width ?? n,
        m = d?.height ?? u;
    return (0, l.jsx)("svg", {
        ...(0, r.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: f,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
            className: o,
        }),
    });
};
