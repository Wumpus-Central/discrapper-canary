n.d(t, { W: () => a });
var i = n(627968);
n(64700);
var r = n(661531),
    s = n(996682),
    l = n(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: d = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ..._
        } = e,
        u = (0, l.J)(t),
        c = u?.width ?? n,
        E = u?.height ?? a;
    return (0, i.jsx)("svg", {
        ...(0, s.A)(_),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M7 4a1 1 0 0 0 0 2h9.59L4.29 18.3a1 1 0 1 0 1.42 1.4L18 7.42V17a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1H7Z",
            className: o,
        }),
    });
};
