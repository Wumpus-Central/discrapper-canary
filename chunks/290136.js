c.d(e, { CircleQuestionIcon: () => n });
var i = c(477900);
c(582128);
var l = c(661531),
    t = c(996682),
    a = c(27989);
function n(s) {
    let {
            size: e = "md",
            width: c,
            height: n,
            secondaryColor: r = "transparent",
            secondaryColorClass: d = "",
            color: h = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...p
        } = s,
        u = (0, a.J)(e),
        w = u?.width ?? c,
        f = u?.height ?? n;
    return (0, i.jsxs)("svg", {
        ...(0, t.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof r ? r : r.css, className: d }),
            (0, i.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
                clipRule: "evenodd",
                className: o,
            }),
        ],
    });
}
