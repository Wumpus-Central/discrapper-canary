h.r(s);
var e = h(477900);
h(582128);
var t = h(646514),
    i = h(996682),
    l = h(27989);
h.d(
    s,
    {},
    {
        LaptopPhoneIcon: function (a) {
            let {
                    size: s = "md",
                    width: h,
                    height: c,
                    color: d = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                p = (0, l.J)(s),
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
                        d: "M3 15.5V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v.5a.5.5 0 0 1-.5.5H17a4 4 0 0 0-4 4v4.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5ZM12.5 18H2a1 1 0 1 0 0 2h10.48c.33 0 .57-.3.54-.63A4.08 4.08 0 0 1 13 19v-.5a.5.5 0 0 0-.5-.5Z",
                        className: n,
                    }),
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M15 11c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8Zm2 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
