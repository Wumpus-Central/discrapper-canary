a.d(l, { N: () => d });
var t = a(627968),
    o = a(503698),
    n = a.n(o),
    i = a(968172),
    r = a(834730),
    s = a(195529);
function d(e) {
    let { offset: l, monthLabel: a, isRangeSelection: o = !1 } = e;
    return (0, t.jsxs)("div", {
        className: s.F4,
        children: [
            null != a && (0, t.jsx)(r.E, { variant: "text-md/semibold", color: "text-strong", children: a }),
            (0, t.jsxs)(i.r8, {
                offset: l,
                className: s.ZP,
                weekdayStyle: "short",
                children: [
                    (0, t.jsx)(i.co, {
                        children: (e) =>
                            (0, t.jsx)(i.W$, {
                                className: s.e4,
                                children: (0, t.jsx)(r.E, {
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
                                className: n()(s.Hn, o && s.KK),
                                children: (e) => {
                                    let { formattedDate: l } = e;
                                    return (0, t.jsx)("span", {
                                        className: s.AY,
                                        children: (0, t.jsx)(r.E, {
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
