n.d(t, { W: () => r });
var l = n(477900);
n(582128);
var i = n(661531),
    s = n(996682),
    a = n(27989);
function r(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            secondaryColor: d = "transparent",
            secondaryColorClass: o = "",
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...m
        } = e,
        f = (0, a.J)(t),
        x = f?.width ?? n,
        h = f?.height ?? r;
    return (0, l.jsxs)("svg", {
        ...(0, s.A)(m),
        xmlns: "http://www.w3.org/2000/svg",
        width: x,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof d ? d : d.css, className: o }),
            (0, l.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM7 11a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
}
