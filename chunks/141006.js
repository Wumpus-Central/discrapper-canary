s.r(h);
var c = s(477900);
s(582128);
var e = s(646514),
    v = s(996682),
    i = s(27989);
s.d(
    h,
    {},
    {
        QrCodeIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: t,
                    color: l = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...n
                } = a,
                o = (0, i.J)(h),
                r = o?.width ?? s,
                p = o?.height ?? t;
            return (0, c.jsxs)("svg", {
                ...(0, v.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, c.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM20 6a2 2 0 0 0-2-2h-3a1 1 0 1 1 0-2h3a4 4 0 0 1 4 4v3a1 1 0 1 1-2 0V6Z",
                        className: d,
                    }),
                    (0, c.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Zm2 0h2v2H7V7ZM5 15c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2Zm2 0h2v2H7v-2ZM13 7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7Zm2 0h2v2h-2V7ZM17.08 13a1.5 1.5 0 0 0-1.42 1.03c-.09.25-.3.47-.56.47H15a2 2 0 0 0-2 2V20c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-2-2h-.1c-.26 0-.47-.22-.56-.47A1.5 1.5 0 0 0 18.92 13h-1.84ZM20 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: d,
                    }),
                ],
            });
        },
    },
);
