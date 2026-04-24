t.d(l, { L: () => c });
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
                d: "m19.7.3 4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4L20.58 6H15a1 1 0 1 1 0-2h5.59l-2.3-2.3A1 1 0 0 1 19.71.3Z",
                fill: "string" == typeof n ? n : n.css,
                className: o,
            }),
            (0, a.jsx)("path", {
                d: "M12.62 2.05c.41.06.46.61.17.92A3 3 0 0 0 15 8h.51c.28 0 .5.22.5.5V10a4 4 0 1 1-8 0V6a4 4 0 0 1 4.62-3.95Z",
                fill: "string" == typeof n ? n : n.css,
                className: o,
            }),
            (0, a.jsx)("path", {
                d: "M17.56 12.27a.63.63 0 0 1 .73-.35c.21.05.43.08.65.08.38 0 .72.35.6.7A8 8 0 0 1 13 17.94V20h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2.06A8 8 0 0 1 4 10a1 1 0 0 1 2 0 6 6 0 0 0 11.56 2.27Z",
                fill: "string" == typeof n ? n : n.css,
                className: o,
            }),
        ],
    });
};
