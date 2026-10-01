i.d(t, { DownloadIcon: () => l });
var a = i(477900);
i(582128);
var n = i(661531),
    r = i(996682),
    s = i(27989);
function l(e) {
    let {
            size: t = "md",
            width: i,
            height: l,
            color: o = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...d
        } = e,
        h = (0, s.J)(t),
        c = h?.width ?? i,
        f = h?.height ?? l;
    return (0, a.jsx)("svg", {
        ...(0, r.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: u,
        }),
    });
}
