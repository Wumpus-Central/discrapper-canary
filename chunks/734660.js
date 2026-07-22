e.d(s, { E: () => h });
var t = e(627968);
e(64700);
var a = e(661531),
    c = e(996682),
    i = e(27989);
let h = (l) => {
    let {
            size: s = "md",
            width: e,
            height: h,
            color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...n
        } = l,
        o = (0, i.J)(s),
        p = o?.width ?? e,
        w = o?.height ?? h;
    return (0, t.jsx)("svg", {
        ...(0, c.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M13.05 1.4a1.59 1.59 0 0 0-2.1 0l-4.9 4A3.37 3.37 0 0 0 5 8v8c0 1.07.4 2.06 1.05 2.6l4.9 4c.65.53 1.45.53 2.1 0l4.9-4A3.37 3.37 0 0 0 19 16V8c0-1.07-.4-2.06-1.05-2.6l-4.9-4ZM12 3.12 7.32 6.95C7.25 7.01 7 7.35 7 8v8c0 .65.25 1 .32 1.05L12 20.88l4.68-3.83c.07-.06.32-.4.32-1.05V8c0-.65-.25-1-.32-1.05L12 3.12Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
};
