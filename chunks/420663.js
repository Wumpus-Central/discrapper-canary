l.d(t, { N: () => r });
var a = l(477900);
l(582128);
var n = l(661531),
    i = l(996682),
    s = l(27989);
function r(e) {
    let {
            size: t = "md",
            width: l,
            height: r,
            color: o = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
        } = e,
        d = (0, s.J)(t),
        m = d?.width ?? l,
        h = d?.height ?? r;
    return (0, a.jsx)("svg", {
        ...(0, i.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm5.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.8-1.17a1 1 0 0 1-1.39-.27 3.5 3.5 0 0 0-5.82 0 1 1 0 1 1-1.66-1.12 5.5 5.5 0 0 1 9.14 0 1 1 0 0 1-.27 1.4Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
}
