i.r(s);
var c = i(477900);
i(582128);
var e = i(646514),
    h = i(996682),
    r = i(27989);
i.d(
    s,
    {},
    {
        TwitterNeutralIcon: function (t) {
            let {
                    size: s = "md",
                    width: i,
                    height: a,
                    color: n = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...l
                } = t,
                o = (0, r.J)(s),
                p = o?.width ?? i,
                w = o?.height ?? a;
            return (0, c.jsx)("svg", {
                ...(0, h.A)(l),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, c.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "m20.75 7.51.01.59c0 5.96-4.54 12.84-12.84 12.84-2.45 0-4.86-.7-6.92-2.03a9.06 9.06 0 0 0 6.68-1.87 4.52 4.52 0 0 1-4.22-3.13c.68.13 1.38.1 2.04-.08A4.51 4.51 0 0 1 1.88 9.4v-.05c.63.35 1.33.54 2.05.56a4.52 4.52 0 0 1-1.4-6.02 12.81 12.81 0 0 0 9.3 4.71 4.52 4.52 0 0 1 7.7-4.12 9.06 9.06 0 0 0 2.86-1.1 4.53 4.53 0 0 1-1.98 2.5c.9-.1 1.77-.34 2.59-.7-.6.9-1.37 1.7-2.25 2.33Z",
                    className: d,
                }),
            });
        },
    },
);
