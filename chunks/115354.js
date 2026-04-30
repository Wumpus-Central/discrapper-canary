n.d(t, { O: () => l });
var i = n(627968);
n(64700);
var a = n(661531),
    r = n(996682),
    s = n(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        _ = (0, s.J)(t),
        E = _?.width ?? n,
        u = _?.height ?? l;
    return (0, i.jsx)("svg", {
        ...(0, r.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: E,
        height: u,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM5 15v2h2v-2H5Zm4 0v2h2v-2H9Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2ZM7 13v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2ZM5 11v2h2v-2H5Zm4 0v2h2v-2H9Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
};
