i.r(t);
var h = i(477900);
i(582128);
var c = i(646514),
    e = i(996682),
    r = i(27989);
i.d(
    t,
    {},
    {
        TiktokNeutralIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: a,
                    color: n = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...d
                } = s,
                l = (0, r.J)(t),
                p = l?.width ?? i,
                w = l?.height ?? a;
            return (0, h.jsx)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M18.31 6.2A5.04 5.04 0 0 1 16.06 2h-3.55v14.47a3 3 0 0 1-2.98 2.92 3.04 3.04 0 0 1 0-6.07c.3 0 .6.05.88.14V9.77A6.6 6.6 0 0 0 3 16.35c0 2.25 1.1 4.24 2.79 5.45A6.42 6.42 0 0 0 9.53 23a6.6 6.6 0 0 0 6.53-6.65V9.02A8.34 8.34 0 0 0 21 10.63v-3.6c-1 0-1.91-.3-2.69-.82Z",
                    className: o,
                }),
            });
        },
    },
);
