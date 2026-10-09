t.d(h, { FolderIcon: () => c });
var i = t(477900);
t(582128);
var a = t(661531),
    e = t(996682),
    r = t(27989);
function c(s) {
    let {
            size: h = "md",
            width: t,
            height: c,
            color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...o
        } = s,
        l = (0, r.J)(h),
        p = l?.width ?? t,
        w = l?.height ?? c;
    return (0, i.jsx)("svg", {
        ...(0, e.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M2 5a3 3 0 0 1 3-3h3.93a2 2 0 0 1 1.66.9L12 5h7a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z",
            className: n,
        }),
    });
}
