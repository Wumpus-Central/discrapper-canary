a.d(l, { N: () => d });
var t = a(627968),
    o = a(503698),
    n = a.n(o),
    i = a(968172),
    s = a(834730),
    r = a(202336);
function d(e) {
    let { offset: l, monthLabel: a, isRangeSelection: o = !1 } = e;
    return (0, t.jsxs)("div", {
        className: r.F4,
        children: [
            null != a && (0, t.jsx)(s.E, { variant: "text-md/semibold", color: "text-strong", children: a }),
            (0, t.jsxs)(i.r8, {
                offset: l,
                className: r.ZP,
                weekdayStyle: "short",
                children: [
                    (0, t.jsx)(i.co, {
                        children: (e) =>
                            (0, t.jsx)(i.W$, {
                                className: r.e4,
                                children: (0, t.jsx)(s.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: e,
                                }),
                            }),
                    }),
                    (0, t.jsx)(i.Xq, {
                        children: (e) =>
                            (0, t.jsx)(i.Zr, {
                                date: e,
                                className: n()(r.Hn, o && r.KK),
                                children: (e) => {
                                    let { formattedDate: l } = e;
                                    return (0, t.jsx)("span", {
                                        className: r.AY,
                                        children: (0, t.jsx)(s.E, {
                                            variant: "text-md/normal",
                                            color: "currentColor",
                                            children: l,
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
