e.r(a);
var l = e(477900);
e(582128);
var c = e(646514),
    t = e(996682),
    h = e(27989);
e.d(
    a,
    {},
    {
        CalendarRetryIcon: function (s) {
            let {
                    size: a = "md",
                    width: e,
                    height: i,
                    color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...p
                } = s,
                o = (0, h.J)(a),
                r = o?.width ?? e,
                v = o?.height ?? i;
            return (0, l.jsxs)("svg", {
                ...(0, t.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M19 16a3 3 0 1 0 1.98 5.25 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h1.24a3 3 0 0 0-1.29-.85M19 16c.17 0 .34.01.5.04Z",
                        clipRule: "evenodd",
                        fill: "string" == typeof d ? d : d.css,
                        className: n,
                    }),
                    (0, l.jsx)("path", {
                        d: "M19.95 16.15v.01l-.44-.12",
                        fill: "string" == typeof d ? d : d.css,
                        className: n,
                    }),
                    (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M22 11.82V10a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a3 3 0 0 0 3 3h6.88c.37 0 .61-.38.5-.73a7 7 0 0 1 8.83-8.91c.15.05.3.03.44-.04l.02-.01c.2-.1.33-.28.33-.5ZM5 12.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Z",
                        clipRule: "evenodd",
                        fill: "string" == typeof d ? d : d.css,
                        className: n,
                    }),
                    (0, l.jsx)("path", {
                        d: "M8 2a1 1 0 1 0-2 0v.75c0 .14-.11.25-.25.25H5a3 3 0 0 0-3 3 1 1 0 0 0 1 1h18a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-.75a.25.25 0 0 1-.25-.25V2a1 1 0 1 0-2 0v.75c0 .14-.11.25-.25.25h-7.5A.25.25 0 0 1 8 2.75V2Z",
                        fill: "string" == typeof d ? d : d.css,
                        className: n,
                    }),
                ],
            });
        },
    },
);
