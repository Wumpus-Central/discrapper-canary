n.d(t, { W: () => a });
var l = n(477900);
n(582128);
var i = n(661531),
    s = n(996682),
    r = n(27989);
function a(e) {
    let {
            size: t = "md",
            width: n,
            height: a,
            secondaryColor: d = "transparent",
            secondaryColorClass: o = "",
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...m
        } = e,
        f = (0, r.J)(t),
        h = f?.width ?? n,
        x = f?.height ?? a;
    return (0, l.jsxs)("svg", {
        ...(0, s.A)(m),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: x,
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
