a.d(l, { q: () => c });
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
    return (0, t.jsxs)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h7.67c.2 0 .4-.14.49-.33.22-.44.55-.83.95-1.12.3-.2.4-.65.14-.9l-.52-.53a3 3 0 0 1 2.43-5.1c.35.03.69-.21.69-.56v-.43a.49.49 0 0 0-.21-.4A9.49 9.49 0 0 0 12.47 11h-.94Z",
                className: r,
            }),
            (0, t.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                d: "M24 17a1 1 0 1 0-2 0v3.59l-4.3-4.3a1 1 0 0 0-1.4 1.42L20.58 22H17a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1v-6Z",
                className: r,
            }),
        ],
    });
};
