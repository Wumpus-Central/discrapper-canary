r.d(t, { U: () => a });
var s = r(627968);
r(64700);
var n = r(661531),
    l = r(996682),
    i = r(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: r,
            height: a,
            color: o = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...d
        } = e,
        c = (0, i.J)(t),
        h = c?.width ?? r,
        m = c?.height ?? a;
    return (0, s.jsx)("svg", {
        ...(0, l.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.59V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.59l-5.09 5.09-1.8-1.8a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42L9 13.4l1.8 1.8a1 1 0 0 0 1.4 0L18 9.4Z",
            clipRule: "evenodd",
            className: u,
        }),
    });
};
