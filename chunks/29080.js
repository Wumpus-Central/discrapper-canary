i.d(t, { w: () => w });
var h = i(477900);
i(582128);
var e = i(661531),
    r = i(996682),
    c = i(27989);
function w(s) {
    let {
            size: t = "md",
            width: i,
            height: w,
            color: d = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...l
        } = s,
        o = (0, c.J)(t),
        p = o?.width ?? i,
        a = o?.height ?? w;
    return (0, h.jsx)("svg", {
        ...(0, r.A)(l),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: a,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            fill: "string" == typeof d ? d : d.css,
            rx: "3",
            className: n,
        }),
    });
}
