a.d(l, { L: () => c });
var t = a(627968);
a(64700);
var s = a(827734),
    i = a(996682),
    n = a(27989);
let c = (e) => {
    let {
            size: l = "md",
            width: a,
            height: c,
            color: h = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = e,
        d = (0, n.J)(l),
        v = d?.width ?? a,
        g = d?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof h ? h : h.css,
            fillRule: "evenodd",
            d: "M3.75 5c.14 0 .25-.11.26-.25A3 3 0 0 1 7 2h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-2.99-2.75.27.27 0 0 0-.26-.25H3a1 1 0 1 1 0-2h.75c.14 0 .25-.11.25-.25v-.5a.25.25 0 0 0-.25-.25H3a1 1 0 1 1 0-2h.75c.14 0 .25-.11.25-.25v-.5a.25.25 0 0 0-.25-.25H3a1 1 0 1 1 0-2h.75c.14 0 .25-.11.25-.25v-.5a.25.25 0 0 0-.25-.25H3a1 1 0 0 1 0-2h.75c.14 0 .25-.11.25-.25v-.5A.25.25 0 0 0 3.75 7H3a1 1 0 0 1 0-2h.75ZM13 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 1a5 5 0 0 0-5 5 1 1 0 0 0 1 1c.16 0 .3-.11.35-.27.18-.64.42-1.24.64-1.74.11-.24.43-.15.4.12l-.13 1.34c-.03.3.2.55.5.55h4.49a.5.5 0 0 0 .5-.55l-.14-1.34c-.03-.27.29-.36.4-.12.22.5.46 1.1.64 1.74.04.16.19.27.35.27a1 1 0 0 0 1-1 5 5 0 0 0-5-5Z",
            clipRule: "evenodd",
            className: r,
        }),
    });
};
