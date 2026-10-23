(t.r(a), t.d(a, { DownloadIcon: () => n }));
var h = t(477900);
t(582128);
var i = t(661531),
    l = t(996682),
    e = t(27989);
function n(s) {
    let {
            size: a = "md",
            width: t,
            height: n,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...c
        } = s,
        d = (0, e.J)(a),
        p = d?.width ?? t,
        w = d?.height ?? n;
    return (0, h.jsx)("svg", {
        ...(0, l.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: r,
        }),
    });
}
