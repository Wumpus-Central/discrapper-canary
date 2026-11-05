c.r(a);
var e = c(477900);
c(582128);
var l = c(646514),
    t = c(996682),
    h = c(27989);
c.d(
    a,
    {},
    {
        AnnouncementsChatIcon: function (s) {
            let {
                    size: a = "md",
                    width: c,
                    height: i,
                    color: n = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = s,
                p = (0, h.J)(a),
                r = p?.width ?? c,
                v = p?.height ?? i;
            return (0, e.jsxs)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, e.jsx)("path", {
                        d: "M22.84 6.03a.57.57 0 0 0 .04.5l1.04 1.67c.22.35-.03.8-.44.8h-4.92A4.53 4.53 0 0 1 14 4.5C14 2.02 16.04 0 18.56 0a4.53 4.53 0 0 1 4.28 6.03Z",
                        fill: "string" == typeof n ? n : n.css,
                        className: d,
                    }),
                    (0, e.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M22 11.5a.5.5 0 0 0-.5-.5h-2.94a6.56 6.56 0 0 1-6.29-4.63.54.54 0 0 0-.68-.37L6.33 7.88a.5.5 0 0 0-.33.47v10.09a3 3 0 0 0 2.27 2.9l.62.16c1.57.4 3.15-.56 3.55-2.12a.92.92 0 0 1 1.23-.63l2.36.94c.42.27.79.62 1.07 1.03A3 3 0 0 0 19.56 22h.94c.83 0 1.5-.67 1.5-1.5v-9Zm-10.97 6.3L8 16.7v1.73a1 1 0 0 0 .76.97l.62.15c.5.13 1-.17 1.12-.67.1-.41.29-.78.53-1.1Z",
                        clipRule: "evenodd",
                        fill: "string" == typeof n ? n : n.css,
                        className: d,
                    }),
                    (0, e.jsx)("path", {
                        d: "M2 10c0-1.1.9-2 2-2h.5c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-4Z",
                        fill: "string" == typeof n ? n : n.css,
                        className: d,
                    }),
                ],
            });
        },
    },
);
