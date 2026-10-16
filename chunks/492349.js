a.d(s, { x: () => e });
var t = a(477900);
a(582128);
var i = a(661531),
    c = a(996682),
    h = a(27989);
function e(l) {
    let {
            size: s = "md",
            width: a,
            height: e,
            secondaryColor: p = "#fff",
            secondaryColorClass: r = "",
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...o
        } = l,
        v = (0, h.J)(s),
        f = v?.width ?? a,
        w = v?.height ?? e;
    return (0, t.jsxs)("svg", {
        ...(0, c.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: f,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M20 16.03v.17c-.05.38-.24.74-.54 1l-6.48 5.44c-.53.45-1.3.48-1.86.09l-.1-.09-2.94-2.47 1.41-1.42 1.87 1.57a1 1 0 0 0 1.28 0l5-4.21a1 1 0 0 0 .36-.76v-5.1l2-2v7.78Zm-4-1.61a1 1 0 0 1-.36.76l-3 2.53a1 1 0 0 1-1.28 0l-.45-.38L16 12.24v2.18ZM11.02 1.36c.56-.48 1.4-.48 1.96 0l2.94 2.47-1.41 1.42-1.87-1.57a1 1 0 0 0-1.28 0l-5 4.21a1 1 0 0 0-.36.76v5.1l-2 2V7.98c0-.45.2-.87.54-1.16l6.48-5.45Zm.34 4.93a1 1 0 0 1 1.28 0l.45.38L8 11.76V9.58a1 1 0 0 1 .36-.76l3-2.53Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M22.7 1.3a1 1 0 0 1 0 1.4l-20 20a1 1 0 0 1-1.4-1.4l20-20a1 1 0 0 1 1.4 0Z",
                className: n,
            }),
        ],
    });
}
