h.r(a);
var e = h(477900);
h(582128);
var l = h(646514),
    i = h(996682),
    t = h(27989);
h.d(
    a,
    {},
    {
        SlashPlusIcon: function (s) {
            let {
                    size: a = "md",
                    width: h,
                    height: c,
                    color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, t.J)(a),
                r = p?.width ?? h,
                v = p?.height ?? c;
            return (0, e.jsxs)("svg", {
                ...(0, i.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: n,
                    }),
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M22 13.67c0 .12-.33.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-3 3v.5a.5.5 0 0 1-.5.5H15a3 3 0 0 0-3 3c0 1.2.7 2.1 1.73 2.61.11.06.06.39-.06.39H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.67Zm-4.21-8.3a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
