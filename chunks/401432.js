n.d(e, { a: () => r });
var s = n(627968);
n(64700);
var i = n(661531),
    l = n(996682),
    a = n(27989);
let r = (t) => {
    let {
            size: e = "md",
            width: n,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
        } = t,
        d = (0, a.J)(e),
        C = d?.width ?? n,
        h = d?.height ?? r;
    return (0, s.jsx)("svg", {
        ...(0, l.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: C,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M16.94 19.06a1.5 1.5 0 1 0 2.12-2.12L14.12 12l4.94-4.94a1.5 1.5 0 1 0-2.12-2.12L12 9.88 7.06 4.94a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-4.94 4.94a1.5 1.5 0 1 0 2.12 2.12L12 14.12l4.94 4.94Z",
            className: c,
        }),
    });
};
