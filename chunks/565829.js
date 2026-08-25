l.d(a, { l: () => h });
var t = l(477900);
l(582128);
var c = l(661531),
    e = l(996682),
    i = l(27989);
function h(s) {
    let {
            size: a = "md",
            width: l,
            height: h,
            color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...r
        } = s,
        o = (0, i.J)(a),
        p = o?.width ?? l,
        w = o?.height ?? h;
    return (0, t.jsxs)("svg", {
        ...(0, e.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2 20.53A9.53 9.53 0 0 1 11.53 11h.94c1.28 0 2.5.25 3.61.7.41.18.36.77-.05.96a7 7 0 0 0-3.65 8.6c.11.36-.13.74-.5.74H6.15a.5.5 0 0 1-.5-.55l.27-2.6c.02-.26-.27-.37-.41-.16-.48.74-1.03 1.8-1.32 2.9a.53.53 0 0 1-.5.41h-.22C2.66 22 2 21.34 2 20.53Z",
                className: n,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                fillRule: "evenodd",
                d: "M19 24a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm1-7a1 1 0 1 0-2 0v2c0 .27.1.52.3.7l1 1a1 1 0 0 0 1.4-1.4l-.7-.71V17Z",
                clipRule: "evenodd",
                className: n,
            }),
        ],
    });
}
