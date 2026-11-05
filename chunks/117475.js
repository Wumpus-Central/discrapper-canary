h.r(a);
var t = h(477900);
h(582128);
var i = h(646514),
    l = h(996682),
    c = h(27989);
h.d(
    a,
    {},
    {
        WebhookPlusIcon: function (s) {
            let {
                    size: a = "md",
                    width: h,
                    height: e,
                    color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: p = "",
                    ...r
                } = s,
                n = (0, c.J)(a),
                d = n?.width ?? h,
                v = n?.height ?? e;
            return (0, t.jsxs)("svg", {
                ...(0, l.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM5.97 13.88a1 1 0 0 1-.72 1.21 3 3 0 1 0 2.73 5.16 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 1 18a5 5 0 0 1 3.75-4.84 1 1 0 0 1 1.22.72Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: p,
                    }),
                    (0, t.jsx)("path", {
                        d: "M11.65 17c.43 0 .69.55.54.95-.07.18-.12.36-.15.55-.04.27-.26.5-.54.5H7.73a2 2 0 1 1-1.78-3l3.2-5.9A5 5 0 1 1 17 6a1 1 0 1 1-2 0 3 3 0 1 0-4.12 2.78 1 1 0 0 1 .5 1.4L7.7 16.96l.02.05h3.92Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: p,
                    }),
                    (0, t.jsx)("path", {
                        d: "M17.12 12.66c.23-.18.32-.52.15-.76L13.8 6.86A2 2 0 1 0 12.16 8l3.52 5.13c.23.33.75.28 1-.03.14-.16.28-.3.44-.43Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: p,
                    }),
                ],
            });
        },
    },
);
