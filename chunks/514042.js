t.d(a, { FileIcon: () => l });
var i = t(477900);
t(582128);
var c = t(661531),
    h = t(996682),
    e = t(27989);
function l(s) {
    let {
            size: a = "md",
            width: t,
            height: l,
            color: n = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...r
        } = s,
        d = (0, e.J)(a),
        o = d?.width ?? t,
        w = d?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, h.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                d: "M18 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h7.5c.28 0 .5.22.5.5V5a5 5 0 0 0 5 5h2.5c.28 0 .5.22.5.5V18a4 4 0 0 1-4 4Z",
                className: p,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                d: "M21.7 7.94c.01.03 0 .06-.04.06H19a3 3 0 0 1-3-3V2.34c0-.03.03-.05.06-.04a3 3 0 0 1 .82.58l4.24 4.24a3 3 0 0 1 .58.82Z",
                className: p,
            }),
        ],
    });
}
