a.d(l, { r: () => r });
var t = a(627968);
a(64700);
var n = a(827734),
    o = a(996682),
    i = a(27989);
let r = (e) => {
    let {
            size: l = "md",
            width: a,
            height: r,
            color: s = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...u
        } = e,
        c = (0, i.J)(l),
        b = c?.width ?? a,
        p = c?.height ?? r;
    return (0, t.jsxs)("svg", {
        ...(0, o.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: b,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                fillRule: "evenodd",
                d: "M18.09 1.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.92 1.92 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                clipRule: "evenodd",
                className: d,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M11.45 8c.35 0 .6.35.55.7-.02.2-.02.4 0 .6.04.35-.2.7-.55.7h-1.6l-.67 4h4.97l.26-1.55c.05-.27.31-.45.59-.45h.92c.31 0 .55.28.5.58L16.18 14H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86l-.86 5.16A1 1 0 0 1 6 20.84L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 0 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8h1.26Z",
                className: d,
            }),
        ],
    });
};
