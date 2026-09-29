i.d(t, { T: () => a });
var h = i(477900);
i(582128);
var c = i(661531),
    e = i(996682),
    r = i(27989);
function a(s) {
    let {
            size: t = "md",
            width: i,
            height: a,
            color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: l = "",
            ...n
        } = s,
        p = (0, r.J)(t),
        o = p?.width ?? i,
        w = p?.height ?? a;
    return (0, h.jsx)("svg", {
        ...(0, e.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M8.65 1.51A2 2 0 0 0 6 3.41v9.88A3.98 3.98 0 0 0 4.5 13C2.57 13 1 14.34 1 16s1.57 3 3.5 3S8 17.66 8 16V5.4l11 3.81v7.08a3.98 3.98 0 0 0-1.5-.29c-1.93 0-3.5 1.34-3.5 3s1.57 3 3.5 3 3.5-1.34 3.5-3V7.03c0-.74-.47-1.4-1.18-1.65L8.65 1.51Z",
            className: l,
        }),
    });
}
