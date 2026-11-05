a.r(c);
var l = a(477900);
a(582128);
var e = a(646514),
    i = a(996682),
    h = a(27989);
a.d(
    c,
    {},
    {
        MicrophoneWarningIcon: function (s) {
            let {
                    size: c = "md",
                    width: a,
                    height: t,
                    color: n = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = s,
                p = (0, h.J)(c),
                r = p?.width ?? a,
                f = p?.height ?? t;
            return (0, l.jsxs)("svg", {
                ...(0, i.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: f,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("path", {
                        d: "M5 9a1 1 0 0 1 1 1 6 6 0 0 0 11.53 2.33c.08-.2.27-.33.48-.33h1.1c.32 0 .56.3.45.62A8 8 0 0 1 13 17.94V20h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2v-2.06A8 8 0 0 1 4 10a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof n ? n : n.css,
                        className: d,
                    }),
                    (0, l.jsx)("path", {
                        d: "M12 2c.86 0 1.65.27 2.3.73.36.25.42.75.2 1.14l-2.1 3.66c-1.22 2.12.46 4.47 2.64 4.47.19 0 .3.2.2.35A4 4 0 0 1 8 10V6a4 4 0 0 1 4-4Z",
                        fill: "string" == typeof n ? n : n.css,
                        className: d,
                    }),
                    (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M18.09 1.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9ZM19 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-.45-3.5a.5.5 0 0 0-.5.55l.22 2.02c.01.16.17.26.33.23a1.93 1.93 0 0 1 .8 0c.16.03.32-.07.33-.23l.21-2.02a.5.5 0 0 0-.5-.55h-.89Z",
                        clipRule: "evenodd",
                        fill: "string" == typeof n ? n : n.css,
                        className: d,
                    }),
                ],
            });
        },
    },
);
