t.d(l, { w: () => r });
var n = t(627968);
t(64700);
var a = t(661531),
    s = t(996682),
    i = t(27989);
let r = (e) => {
    let {
            size: l = "md",
            width: t,
            height: r,
            color: u = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
        } = e,
        c = (0, i.J)(l),
        m = c?.width ?? t,
        f = c?.height ?? r;
    return (0, n.jsx)("svg", {
        ...(0, s.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            fill: "string" == typeof u ? u : u.css,
            rx: "3",
            className: o,
        }),
    });
};
