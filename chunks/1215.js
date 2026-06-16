n.d(t, { n: () => a });
var i = n(627968);
n(64700);
var l = n(661531),
    s = n(996682),
    r = n(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...d
        } = e,
        c = (0, r.J)(t),
        h = c?.width ?? n,
        g = c?.height ?? a;
    return (0, i.jsx)("svg", {
        ...(0, s.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "m2.7 22.7 20-20a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4ZM13.2 16a.5.5 0 0 1-.35-.85l8.3-8.3a.5.5 0 0 1 .85.36V13a3 3 0 0 1-3 3h-5.8ZM17.15 2.85a.5.5 0 0 0-.36-.85H5a3 3 0 0 0-3 3v8a3 3 0 0 0 1.85 2.77c.17.07.36.02.49-.11l12.8-12.8ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
            className: u,
        }),
    });
};
