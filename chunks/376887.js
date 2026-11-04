var l = s(477900),
    n = s(503698),
    r = s.n(n),
    i = s(221174),
    c = s(834730),
    t = s(859962);
s.d(
    a,
    {},
    {
        N: function (e) {
            let { offset: a, monthLabel: s, isRangeSelection: n = !1 } = e;
            return (0, l.jsxs)("div", {
                className: t.F4,
                children: [
                    null != s && (0, l.jsx)(c.E, { variant: "body-md/semibold", color: "text-strong", children: s }),
                    (0, l.jsxs)(i.r8, {
                        offset: a,
                        className: t.ZP,
                        weekdayStyle: "short",
                        children: [
                            (0, l.jsx)(i.co, {
                                children: (e) =>
                                    (0, l.jsx)(i.W$, {
                                        className: t.e4,
                                        children: (0, l.jsx)(c.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: e,
                                        }),
                                    }),
                            }),
                            (0, l.jsx)(i.Xq, {
                                children: (e) =>
                                    (0, l.jsx)(i.Zr, {
                                        date: e,
                                        className: r()(t.Hn, n && t.KK),
                                        children: (e) => {
                                            let { formattedDate: a } = e;
                                            return (0, l.jsx)("span", {
                                                className: t.AY,
                                                children: (0, l.jsx)(c.E, {
                                                    variant: "body-md/normal",
                                                    color: "currentColor",
                                                    children: a,
                                                }),
                                            });
                                        },
                                    }),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);
