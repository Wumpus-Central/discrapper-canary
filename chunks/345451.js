c.r(s);
var e = c(477900);
c(582128);
var a = c(646514),
    i = c(996682),
    h = c(27989);
c.d(
    s,
    {},
    {
        EmojiColdFaceIcon: function (l) {
            let {
                    size: s = "md",
                    width: c,
                    height: t,
                    color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...n
                } = l,
                p = (0, h.J)(s),
                r = p?.width ?? c,
                w = p?.height ?? t;
            return (0, e.jsxs)("svg", {
                ...(0, i.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M9.5 15.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z",
                        className: o,
                    }),
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M22.41 15.55a11 11 0 1 0-21.2-1.35l.69 6.8c.01.13.19.13.2 0l.35-3.53c.2.34.41.67.64.98l.81 4.06c.02.1.18.1.2 0l.48-2.4c.54.5 1.14.95 1.78 1.34l.54 2.16c.03.1.17.1.2 0l.4-1.57a10.96 10.96 0 0 0 7.92.42l.88 1.25c.1.14.3.14.4 0l2.2-3.15c.63-.5 1.2-1.08 1.7-1.7l.55 3.5c.02.12.18.12.2 0l1.06-6.8ZM19 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm.5 3.5A2.5 2.5 0 0 1 9.5 14h5a2.5 2.5 0 0 1 0 5h-5A2.5 2.5 0 0 1 7 16.5Z",
                        clipRule: "evenodd",
                        className: o,
                    }),
                ],
            });
        },
    },
);
