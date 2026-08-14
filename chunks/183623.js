e.d(a, { F: () => c });
var l = e(477900);
e(582128);
var h = e(661531),
    i = e(996682),
    t = e(27989);
function c(s) {
    let {
            size: a = "md",
            width: e,
            height: c,
            color: d = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = s,
        o = (0, t.J)(a),
        r = o?.width ?? e,
        v = o?.height ?? c;
    return (0, l.jsxs)("svg", {
        ...(0, i.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                fillRule: "evenodd",
                d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                clipRule: "evenodd",
                className: n,
            }),
            (0, l.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                className: n,
            }),
        ],
    });
}
