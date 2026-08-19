s.d(h, { $: () => n });
var t = s(477900);
s(582128);
var i = s(661531),
    e = s(996682),
    l = s(27989);
function n(a) {
    let {
            size: h = "md",
            width: s,
            height: n,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = a,
        d = (0, l.J)(h),
        w = d?.width ?? s,
        p = d?.height ?? n;
    return (0, t.jsx)("svg", {
        ...(0, e.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M2 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 8a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H3Z",
            className: o,
        }),
    });
}
