t.d(s, { B: () => c });
var l = t(627968);
t(64700);
var i = t(661531),
    a = t(996682),
    h = t(27989);
let c = (e) => {
    let {
            size: s = "md",
            width: t,
            height: c,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...n
        } = e,
        o = (0, h.J)(s),
        w = o?.width ?? t,
        v = o?.height ?? c;
    return (0, l.jsx)("svg", {
        ...(0, a.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
};
