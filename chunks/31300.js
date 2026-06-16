s.d(h, { k: () => r });
var t = s(627968);
s(64700);
var e = s(661531),
    i = s(996682),
    l = s(27989);
let r = (a) => {
    let {
            size: h = "md",
            width: s,
            height: r,
            color: d = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: w = "",
            ...c
        } = a,
        n = (0, l.J)(h),
        o = n?.width ?? s,
        p = n?.height ?? r;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
            className: w,
        }),
    });
};
