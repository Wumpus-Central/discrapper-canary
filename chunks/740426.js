t.d(l, { k: () => n });
var s = t(627968);
t(64700);
var a = t(661531),
    r = t(996682),
    i = t(27989);
let n = (e) => {
    let {
            size: l = "md",
            width: t,
            height: n,
            color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...d
        } = e,
        o = (0, i.J)(l),
        v = o?.width ?? t,
        f = o?.height ?? n;
    return (0, s.jsxs)("svg", {
        ...(0, r.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, s.jsx)("path", {
                fillRule: "evenodd",
                d: "M18.5 23c.88 0 1.7-.25 2.4-.69l1.4 1.4a1 1 0 0 0 1.4-1.42l-1.39-1.4A4.5 4.5 0 1 0 18.5 23Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
                clipRule: "evenodd",
                fill: "string" == typeof c ? c : c.css,
                className: h,
            }),
            (0, s.jsx)("path", {
                d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z",
                fill: "string" == typeof c ? c : c.css,
                className: h,
            }),
        ],
    });
};
