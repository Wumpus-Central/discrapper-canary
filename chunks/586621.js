"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(196827),
    r = n(580630),
    a = n(18743),
    o = n(233089),
    d = n(652215),
    c = n(985018),
    u = n(796416);
function m(e) {
    let {
        children: t,
        revenue: n,
        revenueTrend: m,
        summaryMetricLabel: g,
        summaryMetricValue: x,
        summaryMetricTrend: h,
        summaryMetricTrendIsPercent: _,
    } = e;
    return (0, i.jsx)(s.nVY, {
        label: c.intl.string(c.t.ofmOzb),
        children: (0, i.jsxs)("div", {
            className: u.E7,
            children: [
                (0, i.jsxs)(o.t, {
                    children: [
                        (0, i.jsx)(a.A, {
                            label: c.intl.string(c.t.iY1jW3),
                            value: (0, r.$g)(n ?? 0, d.Yri.USD),
                            additionalContent: (0, i.jsx)(l.u, { value: m, isPercent: !0 }),
                        }),
                        (0, i.jsx)(a.A, {
                            label: g,
                            value: x,
                            additionalContent: (0, i.jsx)(l.u, { value: h, isPercent: _ }),
                        }),
                    ],
                }),
                t,
            ],
        }),
    });
}
