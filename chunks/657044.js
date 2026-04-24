t.d(l, { _: () => c });
var a = t(627968);
t(64700);
var s = t(661531),
    i = t(996682),
    h = t(27989);
let c = (e) => {
    let {
            size: l = "md",
            width: t,
            height: c,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...r
        } = e,
        d = (0, h.J)(l),
        v = d?.width ?? t,
        g = d?.height ?? c;
    return (0, a.jsxs)("svg", {
        ...(0, i.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, a.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                d: "M6.69 2A3 3 0 0 0 3.7 4.67l-.33 3A3 3 0 0 0 6.35 11H7V9a1 1 0 0 1 2 0v2h6V9a1 1 0 1 1 2 0v2h.65a3.05 3.05 0 0 0 .9-.14 3 3 0 0 0 2.08-3.2l-.33-3A3 3 0 0 0 17.3 2H6.7Z",
                className: o,
            }),
            (0, a.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                fillRule: "evenodd",
                d: "M15 13v1a1 1 0 1 0 2 0v-1h.65c1.43 0 2.72-.6 3.62-1.56l.04.22.68 5.88A4 4 0 0 1 18 22H6A4 4 0 0 1 2 17.54l.68-5.88.04-.22c.9.96 2.19 1.56 3.62 1.56H7v1a1 1 0 1 0 2 0v-1h6Zm-6 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                clipRule: "evenodd",
                className: o,
            }),
        ],
    });
};
