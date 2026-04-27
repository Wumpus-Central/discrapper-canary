n.d(t, { a: () => a });
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
            d: "M16.94 19.06a1.5 1.5 0 1 0 2.12-2.12L14.12 12l4.94-4.94a1.5 1.5 0 1 0-2.12-2.12L12 9.88 7.06 4.94a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-4.94 4.94a1.5 1.5 0 1 0 2.12 2.12L12 14.12l4.94 4.94Z",
            className: o,
        }),
    });
};
