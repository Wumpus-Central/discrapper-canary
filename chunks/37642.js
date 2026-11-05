h.r(s);
var t = h(477900);
h(582128);
var c = h(646514),
    i = h(996682),
    l = h(27989);
h.d(
    s,
    {},
    {
        FlagPlusIcon: function (a) {
            let {
                    size: s = "md",
                    width: h,
                    height: e,
                    color: r = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...p
                } = a,
                v = (0, l.J)(s),
                d = v?.width ?? h,
                o = v?.height ?? e;
            return (0, t.jsxs)("svg", {
                ...(0, i.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: o,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: n,
                    }),
                    (0, t.jsx)("path", {
                        d: "M21.85 14.07c.12.36.54.57.76.27a2 2 0 0 0 .39-1.19v-7.3a2 2 0 0 0-2.33-1.98L15 4.82V3.35a2 2 0 0 0-2.33-1.98L4 2.82V2a1 1 0 1 0-2 0v19a1 1 0 1 0 2 0v-6.82l8.2-1.37c.37-.06.65.28.47.6a5.01 5.01 0 0 1-1.94 1.94c-.26.14-.38.47-.18.68a2 2 0 0 0 1.78.6c.37-.07.73-.18 1.09-.3.52-.16 1.04-.33 1.58-.33h.5a.5.5 0 0 0 .5-.5V15a3 3 0 0 1 5.85-.93Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: n,
                    }),
                ],
            });
        },
    },
);
