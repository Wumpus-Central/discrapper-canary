l.r(e);
var t = l(477900);
l(582128);
var i = l(646514),
    a = l(996682),
    c = l(27989);
l.d(
    e,
    {},
    {
        ChatSlowModeIcon: function (s) {
            let {
                    size: e = "md",
                    width: l,
                    height: d,
                    color: h = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...n
                } = s,
                p = (0, c.J)(e),
                r = p?.width ?? l,
                w = p?.height ?? d;
            return (0, t.jsxs)("svg", {
                ...(0, a.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        d: "M12 22c.32 0 .52-.33.41-.63A6.99 6.99 0 0 1 19 12c.83 0 1.63.14 2.37.41.3.1.63-.1.63-.41a10 10 0 1 0-18.45 5.36c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
                        className: o,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        fillRule: "evenodd",
                        d: "M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-5-3a1 1 0 0 1 1 1v1.59l.7.7a1 1 0 0 1-1.4 1.42l-1-1A1 1 0 0 1 18 19v-2a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: o,
                    }),
                ],
            });
        },
    },
);
