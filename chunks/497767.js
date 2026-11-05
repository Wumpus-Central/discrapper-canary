h.r(c);
var l = h(477900);
h(582128);
var t = h(646514),
    a = h(996682),
    i = h(27989);
h.d(
    c,
    {},
    {
        UserCheckIcon: function (s) {
            let {
                    size: c = "md",
                    width: h,
                    height: e,
                    color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...p
                } = s,
                d = (0, i.J)(c),
                o = d?.width ?? h,
                w = d?.height ?? e;
            return (0, l.jsxs)("svg", {
                ...(0, a.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h6.4a.5.5 0 0 0 .35-.85l-.02-.03a3 3 0 1 1 4.24-4.24l.53.52c.2.2.5.2.7 0l1.8-1.8c.17-.17.2-.43.06-.62A9.52 9.52 0 0 0 12.47 11h-.94Z",
                        className: n,
                    }),
                    (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M23.7 17.7a1 1 0 1 0-1.4-1.4L18 20.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
