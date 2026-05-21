i.d(s, { B: () => c });
var t = i(627968);
i(64700);
var l = i(661531),
    d = i(996682),
    h = i(27989);
let c = (e) => {
    let {
            size: s = "md",
            width: i,
            height: c,
            color: a = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...r
        } = e,
        n = (0, h.J)(s),
        o = n?.width ?? i,
        w = n?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, d.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            fillRule: "evenodd",
            d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
            clipRule: "evenodd",
            className: p,
        }),
    });
};
