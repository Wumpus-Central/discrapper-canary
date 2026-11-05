a.r(s);
var i = a(477900);
a(582128);
var t = a(646514),
    e = a(996682),
    r = a(27989);
a.d(
    s,
    {},
    {
        QuestsNotificationIcon: function (c) {
            let {
                    size: s = "md",
                    width: a,
                    height: o,
                    color: h = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: l = "",
                    secondaryColor: n = t.A.colors.ICON_FEEDBACK_NOTIFICATION,
                    secondaryColorClass: p = "",
                    ...d
                } = c,
                A = (0, r.J)(s),
                w = A?.width ?? a,
                I = A?.height ?? o;
            return (0, i.jsxs)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: w,
                height: I,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        d: "M9.5 2c.3 0 .6.04.9.1.34.08.58.37.6.72V3a4 4 0 0 1-3.7 3.99A8.07 8.07 0 0 0 6 11.5c0 3.16 2.29 6.18 5.49 6.48.3.02.54.3.52.6a6.98 6.98 0 0 0 .05 1.3c.04.32-.2.62-.53.63a9 9 0 0 0-4.03 1.2 1 1 0 0 1-1-1.74c.6-.35 1.24-.64 1.9-.87a7.95 7.95 0 0 1-1.52-1.07 3.98 3.98 0 0 1-5.49-1.8.77.77 0 0 1 .24-.95c.57-.43 1.27-.7 2.02-.76A4 4 0 0 1 1 10.47a.76.76 0 0 1 .71-.71 4.05 4.05 0 0 1 1.6.22 4 4 0 0 1-.54-5.35c.22-.3.62-.4.95-.24.75.36 1.37.95 1.77 1.67V6a4 4 0 0 1 4-4ZM14.5 2a4 4 0 0 1 4 4v.06a4.02 4.02 0 0 1 1.77-1.67.77.77 0 0 1 .95.24 3.98 3.98 0 0 1-.55 5.35 4 4 0 0 1 1.6-.22c.4.03.7.33.72.71a4.04 4.04 0 0 1-.37 1.99c-.12.24-.41.31-.65.2a6.97 6.97 0 0 0-3.42-.65.52.52 0 0 1-.55-.51c0-1.56-.41-3.21-1.3-4.51A4 4 0 0 1 13 2.82a.77.77 0 0 1 .6-.72c.3-.06.6-.1.9-.1Z",
                        className: l,
                    }),
                    (0, i.jsx)("circle", {
                        cx: "19",
                        cy: "19",
                        r: "5",
                        fill: "string" == typeof n ? n : n.css,
                        className: p,
                    }),
                ],
            });
        },
    },
);
