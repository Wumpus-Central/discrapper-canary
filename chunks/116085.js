t.d(e, { B: () => h });
var i = t(477900);
t(582128);
var l = t(661531),
    c = t(996682),
    a = t(27989);
function h(s) {
    let {
            size: e = "md",
            width: t,
            height: h,
            color: n = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...o
        } = s,
        r = (0, a.J)(e),
        w = r?.width ?? t,
        v = r?.height ?? h;
    return (0, i.jsx)("svg", {
        ...(0, c.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
}
