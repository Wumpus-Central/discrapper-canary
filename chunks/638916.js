n.d(t, { q: () => s });
var l = n(627968);
n(64700);
var a = n(827734),
    i = n(996682),
    r = n(27989);
let s = (e) => {
    let {
            size: t = "md",
            width: n,
            height: s,
            color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
        } = e,
        u = (0, r.J)(t),
        m = u?.width ?? n,
        h = u?.height ?? s;
    return (0, l.jsx)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M2.1 12a3 3 0 0 0 0 4.24l.46.46c.17.17.43.2.65.1a3 3 0 0 1 4 4c-.1.2-.08.47.09.64l.46.46a3 3 0 0 0 4.24 0l6.77-6.77a1 1 0 0 1 1.36-1.36L21.9 12a3 3 0 0 0 0-4.24l-.46-.47a.56.56 0 0 0-.65-.08 3 3 0 0 1-4-4 .56.56 0 0 0-.08-.65l-.47-.46a3 3 0 0 0-4.24 0l-1.77 1.77a1 1 0 0 1-1.36 1.36L2.1 12Zm10.01-6.3A1 1 0 0 0 10.7 7.1l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 0 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 0 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
};
