s.d(t, { G: () => r });
var a = s(477900);
s(582128);
var i = s(661531),
    n = s(996682),
    l = s(27989);
function r(e) {
    let {
            size: t = "md",
            width: s,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...h
        } = e,
        d = (0, l.J)(t),
        c = d?.width ?? s,
        p = d?.height ?? r;
    return (0, a.jsx)("svg", {
        ...(0, n.A)(h),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M9.6 7.8 4 12l5.6 4.2a1 1 0 0 1 .4.8v1.98c0 .21-.24.33-.4.2l-8.1-6.4a1 1 0 0 1 0-1.56l8.1-6.4c.16-.13.4-.01.4.2V7a1 1 0 0 1-.4.8ZM14.4 7.8 20 12l-5.6 4.2a1 1 0 0 0-.4.8v1.98c0 .21.24.33.4.2l8.1-6.4a1 1 0 0 0 0-1.56l-8.1-6.4a.25.25 0 0 0-.4.2V7a1 1 0 0 0 .4.8Z",
            className: u,
        }),
    });
}
