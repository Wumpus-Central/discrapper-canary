s.d(h, { k: () => d });
var t = s(627968);
s(64700);
var i = s(661531),
    e = s(996682),
    r = s(27989);
let d = (a) => {
    let {
            size: h = "md",
            width: s,
            height: d,
            color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
        } = a,
        w = (0, r.J)(h),
        n = w?.width ?? s,
        o = w?.height ?? d;
    return (0, t.jsx)("svg", {
        ...(0, e.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
            className: p,
        }),
    });
};
