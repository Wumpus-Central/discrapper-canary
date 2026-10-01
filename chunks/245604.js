s.d(e, { U: () => l });
var n = s(477900);
s(582128);
var i = s(661531),
    r = s(996682),
    o = s(27989);
function l(a) {
    let {
            size: e = "md",
            width: s,
            height: l,
            secondaryColor: t = "transparent",
            secondaryColorClass: d = "",
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...p
        } = a,
        u = (0, o.J)(e),
        x = u?.width ?? s,
        v = u?.height ?? l;
    return (0, n.jsxs)("svg", {
        ...(0, r.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: x,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof t ? t : t.css, className: d }),
            (0, n.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                clipRule: "evenodd",
                className: h,
            }),
        ],
    });
}
