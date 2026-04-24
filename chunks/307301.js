n.d(t, { j: () => r });
var i = n(627968);
n(64700);
var a = n(661531),
    l = n(996682),
    o = n(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: s = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ..._
        } = e,
        c = (0, o.J)(t),
        p = c?.width ?? n,
        u = c?.height ?? r;
    return (0, i.jsx)("svg", {
        ...(0, l.A)(_),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: u,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: d,
        }),
    });
};
