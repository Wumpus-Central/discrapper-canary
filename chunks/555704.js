s.d(t, { U: () => a });
var r = s(477900);
s(582128);
var n = s(661531),
    l = s(996682),
    i = s(27989);
function a(e) {
    let {
            size: t = "md",
            width: s,
            height: a,
            color: o = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...u
        } = e,
        d = (0, i.J)(t),
        c = d?.width ?? s,
        m = d?.height ?? a;
    return (0, r.jsx)("svg", {
        ...(0, l.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.59V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.59l-5.09 5.09-1.8-1.8a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42L9 13.4l1.8 1.8a1 1 0 0 0 1.4 0L18 9.4Z",
            clipRule: "evenodd",
            className: h,
        }),
    });
}
