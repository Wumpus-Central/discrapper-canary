i.r(c);
var t = i(477900);
i(582128);
var a = i(646514),
    l = i(996682),
    r = i(27989);
i.d(
    c,
    {},
    {
        ChatNotificationIcon: function (s) {
            let {
                    size: c = "md",
                    width: i,
                    height: e,
                    color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: h = "",
                    secondaryColor: n = a.A.colors.ICON_FEEDBACK_NOTIFICATION,
                    secondaryColorClass: p = "",
                    ...d
                } = s,
                f = (0, r.J)(c),
                w = f?.width ?? i,
                N = f?.height ?? e;
            return (0, t.jsxs)("svg", {
                ...(0, l.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: w,
                height: N,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M12 2a10 10 0 0 1 10 10c0 .32-.34.52-.64.41a7 7 0 0 0-8.95 8.95c.1.3-.1.64-.41.64H2.2a1 1 0 0 1-.75-1.66l2.06-2.37a.52.52 0 0 0 .04-.61A10 10 0 0 1 12 2Z",
                        className: h,
                    }),
                    (0, t.jsx)("circle", {
                        cx: "19",
                        cy: "19",
                        r: "5",
                        fill: "string" == typeof n ? n : n.css,
                        className: p,
                    }),
                    (0, t.jsx)("circle", {
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
