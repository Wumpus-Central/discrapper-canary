s.d(t, { M: () => r });
var n = s(477900);
s(582128);
var a = s(661531),
    l = s(996682),
    i = s(27989);
function r(e) {
    let {
            size: t = "md",
            width: s,
            height: r,
            color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...d
        } = e,
        c = (0, i.J)(t),
        h = c?.width ?? s,
        m = c?.height ?? r;
    return (0, n.jsxs)("svg", {
        ...(0, l.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M12.66 21.98c.4-.03.56-.51.28-.8l-.06-.06a3 3 0 1 1 4.24-4.24l.53.52c.2.2.5.2.7 0l2.53-2.52a3 3 0 0 1 .64-.5c.14-.07.24-.2.27-.34a10 10 0 1 0-18.24 3.32c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12c.22 0 .44 0 .66-.02Z",
                className: u,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M23.7 17.7a1 1 0 0 0-1.4-1.4L18 20.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z",
                className: u,
            }),
        ],
    });
}
