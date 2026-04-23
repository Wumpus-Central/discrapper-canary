n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(270003),
    s = n(196827),
    r = n(580630),
    a = n(18743),
    o = n(233089),
    d = n(652215),
    c = n(985018),
    u = n(456365);
function m(e) {
    let {
        children: t,
        revenue: n,
        revenueTrend: m,
        summaryMetricLabel: g,
        summaryMetricValue: h,
        summaryMetricTrend: x,
        summaryMetricTrendIsPercent: _,
    } = e;
    return (0, i.jsx)(l.n, {
        label: c.intl.string(c.t.ofmOzb),
        children: (0, i.jsxs)("div", {
            className: u.E7,
            children: [
                (0, i.jsxs)(o.t, {
                    children: [
                        (0, i.jsx)(a.A, {
                            label: c.intl.string(c.t.iY1jW3),
                            value: (0, r.$g)(n ?? 0, d.Yri.USD),
                            additionalContent: (0, i.jsx)(s.u, { value: m, isPercent: !0 }),
                        }),
                        (0, i.jsx)(a.A, {
                            label: g,
                            value: h,
                            additionalContent: (0, i.jsx)(s.u, { value: x, isPercent: _ }),
                        }),
                    ],
                }),
                t,
            ],
        }),
    });
}
