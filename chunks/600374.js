c.r(s);
var t = c(477900);
c(582128);
var h = c(646514),
    i = c(996682),
    l = c(27989);
c.d(
    s,
    {},
    {
        StagePlusIcon: function (a) {
            let {
                    size: s = "md",
                    width: c,
                    height: e,
                    color: p = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...n
                } = a,
                d = (0, l.J)(s),
                o = d?.width ?? c,
                g = d?.height ?? e;
            return (0, t.jsxs)("svg", {
                ...(0, i.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: g,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M22.29 15.9a.15.15 0 0 1-.29-.05V15c0-.81-.32-1.55-.85-2.09a.57.57 0 0 1-.16-.42L21 12a9 9 0 1 0-16.54 4.92c.27.42.26.97-.07 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 19.37-2.3Z",
                        className: r,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M12.72 17.05c.3-.35.2-1-.25-1.03a6 6 0 0 0-6.14 4.01c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 8.78.42c.05-.03.09-.08.09-.14a.15.15 0 0 0-.15-.15H15a3 3 0 0 1-2.28-4.95ZM19 12a7 7 0 1 0-13.28 3.09c.27.56 1.02.6 1.45.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 5 5c0 .27.37.47.6.34.42-.22.9-.34 1.4-.34Z",
                        className: r,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: r,
                    }),
                ],
            });
        },
    },
);
