h.r(s);
var e = h(477900);
h(582128);
var c = h(646514),
    i = h(996682),
    t = h(27989);
h.d(
    s,
    {},
    {
        CalendarMinusIcon: function (a) {
            let {
                    size: s = "md",
                    width: h,
                    height: l,
                    color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...r
                } = a,
                o = (0, t.J)(s),
                p = o?.width ?? h,
                v = o?.height ?? l;
            return (0, e.jsxs)("svg", {
                ...(0, i.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M2 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a.5.5 0 0 1-.5.5H15a3 3 0 0 0-3 3c0 1.2.7 2.1 1.73 2.61.11.06.06.39-.06.39H5a3 3 0 0 1-3-3v-9Zm3.5 2a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M7 1a1 1 0 0 1 1 1v.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25V2a1 1 0 1 1 2 0v.75c0 .14.11.25.25.25H19a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 3 3 0 0 1 3-3h.75c.14 0 .25-.11.25-.25V2a1 1 0 0 1 1-1ZM15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
