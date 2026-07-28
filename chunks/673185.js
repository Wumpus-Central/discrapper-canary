s.d(h, { $: () => l });
var t = s(627968);
s(64700);
var i = s(661531),
    e = s(996682),
    r = s(27989);
function l(a) {
    let {
            size: h = "md",
            width: s,
            height: l,
            color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = a,
        w = (0, r.J)(h),
        c = w?.width ?? s,
        p = w?.height ?? l;
    return (0, t.jsx)("svg", {
        ...(0, e.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M2 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 8a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H3Z",
            className: d,
        }),
    });
}
