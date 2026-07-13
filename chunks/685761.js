s.d(l, { f: () => d });
var e = s(627968);
s(64700);
var t = s(661531),
    i = s(996682),
    h = s(27989);
let d = (a) => {
    let {
            size: l = "md",
            width: s,
            height: d,
            color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...v
        } = a,
        r = (0, h.J)(l),
        n = r?.width ?? s,
        o = r?.height ?? d;
    return (0, e.jsxs)("svg", {
        ...(0, i.A)(v),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: o,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, e.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M9 10a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z",
                className: p,
            }),
            (0, e.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M13 1a9 9 0 0 1 9 9v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a9 9 0 0 1 9-9h2Zm5.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 8.22a4 4 0 1 0-8 0v9.5a1 1 0 0 0 1.24.97l5.72-1.43c.6-.15 1.04-.7 1.04-1.34v-7.7Zm5.68.26a.73.73 0 0 0-1.36 0l-.18.48a2 2 0 0 1-1.18 1.18l-.48.18a.73.73 0 0 0 0 1.36l.48.18a2 2 0 0 1 1.18 1.18l.18.48a.73.73 0 0 0 1.36 0l.18-.48a2 2 0 0 1 1.18-1.18l.48-.18a.73.73 0 0 0 0-1.36l-.48-.18a2 2 0 0 1-1.18-1.18l-.18-.48ZM14.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
                clipRule: "evenodd",
                className: p,
            }),
        ],
    });
};
