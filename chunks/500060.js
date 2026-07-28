e.d(s, { o: () => c });
var h = e(627968);
e(64700);
var i = e(661531),
    l = e(996682),
    t = e(27989);
function c(a) {
    let {
            size: s = "md",
            width: e,
            height: c,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...o
        } = a,
        p = (0, t.J)(s),
        r = p?.width ?? e,
        v = p?.height ?? c;
    return (0, h.jsxs)("svg", {
        ...(0, l.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, h.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                fillRule: "evenodd",
                d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm5 2c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v.36c0-.21.14-.4.34-.47l2-.67a.5.5 0 0 1 .66.47v4.62a.5.5 0 0 1-.66.47l-2-.67a.5.5 0 0 1-.34-.47V11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7Z",
                clipRule: "evenodd",
                className: n,
            }),
            (0, h.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                className: n,
            }),
        ],
    });
}
