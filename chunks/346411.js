c.d(h, { WrenchIcon: () => n });
var t = c(477900);
c(582128);
var a = c(661531),
    i = c(996682),
    e = c(27989);
function n(s) {
    let {
            size: h = "md",
            width: c,
            height: n,
            color: r = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = s,
        p = (0, e.J)(h),
        l = p?.width ?? c,
        w = p?.height ?? n;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: l,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M7.8 15.77c.7.43 1.2 1.14 1.2 1.96V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3.27c0-.82.5-1.53 1.2-1.96a8.06 8.06 0 0 0 .12-13.63c-.6-.39-1.32.09-1.32.8v5.98a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V2.94c0-.71-.72-1.19-1.32-.8a8.06 8.06 0 0 0 .12 13.63Z",
            className: d,
        }),
    });
}
