e.d(t, { S: () => c });
var s = e(477900);
e(582128);
var l = e(661531),
    i = e(996682),
    n = e(27989);
function c(a) {
    let {
            size: t = "md",
            width: e,
            height: c,
            color: h = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = a,
        d = (0, n.J)(t),
        v = d?.width ?? e,
        g = d?.height ?? c;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            d: "M12 1a11 11 0 0 1 9.16 17.08 2 2 0 0 1-.16-.79V12a5 5 0 1 0-2 4v1.3a4 4 0 0 0 .42 1.78l.35.7A11 11 0 1 1 12 1ZM8.52 16.65a1 1 0 1 0-1.35 1.48 5.83 5.83 0 0 0 4.2 1.52l.83-.04a1 1 0 0 0-.1-2l-.82.04c-1.02.05-2-.31-2.76-1ZM16 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-.5 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-9-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm.74-5a4 4 0 0 0-2.83 1.17L3.3 7.3a1 1 0 1 0 1.42 1.42l1.12-1.12A2 2 0 0 1 7.24 7H8a1 1 0 0 0 0-2h-.76Z",
            className: r,
        }),
    });
}
