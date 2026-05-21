s.d(l, { g: () => d });
var i = s(627968);
s(64700);
var t = s(661531),
    a = s(996682),
    h = s(27989);
let d = (e) => {
    let {
            size: l = "md",
            width: s,
            height: d,
            color: p = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...c
        } = e,
        n = (0, h.J)(l),
        o = n?.width ?? s,
        w = n?.height ?? d;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof p ? p : p.css,
            fillRule: "evenodd",
            d: "M12.24 2a3 3 0 0 0-2.12.88l-8.25 8.25a3 3 0 0 0 0 4.24l6.76 6.76a3 3 0 0 0 4.24 0l8.25-8.25a3 3 0 0 0 .88-2.12V4a2 2 0 0 0-2-2h-7.76ZM17 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
};
