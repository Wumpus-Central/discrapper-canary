"use strict";
a.d(t, { V: () => l });
var n = a(627968);
a(64700);
var r = a(827734),
    i = a(996682),
    s = a(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: a,
            height: l,
            color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        _ = (0, s.J)(t),
        u = _?.width ?? a,
        h = _?.height ?? l;
    return (0, n.jsxs)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h6.4a.5.5 0 0 0 .35-.85l-.02-.03a3 3 0 1 1 4.24-4.24l.53.52c.2.2.5.2.7 0l1.8-1.8c.17-.17.2-.43.06-.62A9.52 9.52 0 0 0 12.47 11h-.94Z",
                className: d,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M23.7 17.7a1 1 0 1 0-1.4-1.4L18 20.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z",
                className: d,
            }),
        ],
    });
};
