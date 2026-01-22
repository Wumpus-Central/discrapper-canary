n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(196827),
    s = n(580630),
    a = n(18743),
    c = n(233089),
    o = n(652215),
    d = n(985018),
    u = n(796416);
function f(e) {
    let {
        children: t,
        revenue: n,
        revenueTrend: f,
        summaryMetricLabel: g,
        summaryMetricValue: b,
        summaryMetricTrend: m,
        summaryMetricTrendIsPercent: p,
    } = e;
    return (0, r.jsx)(i.nVY, {
        label: d.intl.string(d.t.ofmOzb),
        children: (0, r.jsxs)("div", {
            className: u.E7,
            children: [
                (0, r.jsxs)(c.t, {
                    children: [
                        (0, r.jsx)(a.A, {
                            label: d.intl.string(d.t.iY1jW3),
                            value: (0, s.$g)(null != n ? n : 0, o.Yri.USD),
                            additionalContent: (0, r.jsx)(l.u, {
                                value: f,
                                isPercent: !0,
                            }),
                        }),
                        (0, r.jsx)(a.A, {
                            label: g,
                            value: b,
                            additionalContent: (0, r.jsx)(l.u, {
                                value: m,
                                isPercent: p,
                            }),
                        }),
                    ],
                }),
                t,
            ],
        }),
    });
}
