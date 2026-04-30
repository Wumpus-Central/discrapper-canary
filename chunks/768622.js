e.d(l, { g: () => c });
var s = e(627968);
e(64700);
var a = e(661531),
    t = e(996682),
    i = e(27989);
let c = (h) => {
    let {
            size: l = "md",
            width: e,
            height: c,
            color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...n
        } = h,
        o = (0, i.J)(l),
        w = o?.width ?? e,
        v = o?.height ?? c;
    return (0, s.jsx)("svg", {
        ...(0, t.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: w,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
            className: r,
        }),
    });
};
