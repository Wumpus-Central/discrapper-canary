e.d(t, { B: () => h });
var i = e(627968);
e(64700);
var l = e(661531),
    a = e(996682),
    c = e(27989);
function h(s) {
    let {
            size: t = "md",
            width: e,
            height: h,
            color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...r
        } = s,
        o = (0, c.J)(t),
        w = o?.width ?? e,
        v = o?.height ?? h;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
            clipRule: "evenodd",
            className: n,
        }),
    });
}
