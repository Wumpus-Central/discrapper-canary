s.d(a, { N: () => o });
var l = s(477900),
    r = s(503698),
    n = s.n(r),
    i = s(349892),
    c = s(834730),
    t = s(859962);
function o(e) {
    let { offset: a, monthLabel: s, isRangeSelection: r = !1 } = e;
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
                                className: n()(t.Hn, r && t.KK),
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
}
