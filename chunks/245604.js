n.d(t, { U: () => s });
var l = n(627968);
n(64700);
var r = n(661531),
    a = n(996682),
    i = n(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: n,
            height: s,
            secondaryColor: o = "transparent",
            secondaryColorClass: u = "",
            color: c = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...h
        } = e,
        f = (0, i.J)(t),
        A = f?.width ?? n,
        m = f?.height ?? s;
    return (0, l.jsxs)("svg", {
        ...(0, a.A)(h),
        xmlns: "http://www.w3.org/2000/svg",
        width: A,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof o ? o : o.css, className: u }),
            (0, l.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                clipRule: "evenodd",
                className: d,
            }),
        ],
    });
};
