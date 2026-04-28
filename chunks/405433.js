t.d(l, { l: () => c });
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
                d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0Z",
                className: o,
            }),
            (0, a.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                d: "M4 15a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
                className: o,
            }),
        ],
    });
};
