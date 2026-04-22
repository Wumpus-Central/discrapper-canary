a.d(l, { i: () => c });
var t = a(627968);
a(64700);
var s = a(827734),
    i = a(996682),
    n = a(27989);
let c = (e) => {
    let {
            size: l = "md",
            width: a,
            height: c,
            color: h = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = e,
        d = (0, n.J)(l),
        v = d?.width ?? a,
        g = d?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            fillRule: "evenodd",
            d: "M22 12a10 10 0 0 1-10 10H2.2a1 1 0 0 1-.75-1.66l2.06-2.37a.52.52 0 0 0 .04-.61A10 10 0 1 1 22 12Zm-10 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
};
