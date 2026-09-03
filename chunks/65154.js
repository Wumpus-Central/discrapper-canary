i.d(t, { S: () => a });
var s = i(477900);
i(582128);
var n = i(661531),
    r = i(996682),
    l = i(27989);
function a(e) {
    let {
            size: t = "md",
            width: i,
            height: a,
            secondaryColor: o = "transparent",
            secondaryColorClass: c = "",
            color: d = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...m
        } = e,
        T = (0, l.J)(t),
        g = T?.width ?? i,
        _ = T?.height ?? a;
    return (0, s.jsxs)("svg", {
        ...(0, r.A)(m),
        xmlns: "http://www.w3.org/2000/svg",
        width: g,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, s.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof o ? o : o.css, className: c }),
            (0, s.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM9 8.09c0-.88 1-1.4 1.73-.9l5.8 3.91c.63.44.63 1.36 0 1.8l-5.8 3.9C10 17.3 9 16.8 9 15.92V8.1Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
}
