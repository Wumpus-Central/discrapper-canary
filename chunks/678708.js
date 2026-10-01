r.d(t, { FolderIcon: () => a });
var l = r(477900);
r(582128);
var n = r(661531),
    i = r(996682),
    s = r(27989);
function a(e) {
    let {
            size: t = "md",
            width: r,
            height: a,
            color: c = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...u
        } = e,
        o = (0, s.J)(t),
        f = o?.width ?? r,
        d = o?.height ?? a;
    return (0, l.jsx)("svg", {
        ...(0, i.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: f,
        height: d,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M2 5a3 3 0 0 1 3-3h3.93a2 2 0 0 1 1.66.9L12 5h7a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z",
            className: h,
        }),
    });
}
