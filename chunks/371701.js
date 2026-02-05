"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(417597),
    l = n(397927),
    r = n(209812),
    a = n(242564),
    o = n(906779),
    d = n(586621),
    c = n(522663),
    u = n(857802),
    m = n(595303),
    g = n(781289),
    x = n(555337),
    h = n(250627),
    _ = n(839837),
    A = n(89791),
    p = n(985018);
function f(e) {
    let { listingId: t } = e,
        n = (0, h.az)(t);
    return null == n ? null : (0, i.jsx)(a.fh, { children: n.name });
}
function j(e) {
    let { guildId: t } = e,
        n = (0, _.A)(t),
        a = (0, r.GK)(),
        h = (0, s.bG)([x.A], () => x.A.getGuild());
    return n.loading || null == h
        ? (0, i.jsx)(l.y$y, {})
        : null == n.application
          ? (0, i.jsx)(u.A, { guild: h })
          : (0, i.jsxs)(c.A, {
                children: [
                    (0, i.jsx)(d.A, {
                        revenue: n.metrics.revenue,
                        revenueTrend: n.metrics.revenuePctChange,
                        summaryMetricLabel: p.intl.string(p.t.R3PCmW),
                        summaryMetricValue: n.metrics.paymentsCount ?? "-",
                        summaryMetricTrend: n.metrics.paymentsCountChange ?? 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, i.jsx)(A.A, { guildId: t, earningsData: n }),
                    }),
                    (0, i.jsx)(l.D0$, {
                        label: p.intl.string(p.t["+5Rmhl"]),
                        children: (0, i.jsx)(o.A, {
                            ListingIdLabel: f,
                            payoutsByPeriod: n.payoutsByPeriod,
                            team: n.application?.team,
                        }),
                    }),
                    (0, i.jsx)(l.D0$, {
                        label: p.intl.string(p.t.O8cDAJ),
                        disabled: a,
                        children: (0, i.jsx)(m.A, { guildId: t, application: n.application }),
                    }),
                    (0, i.jsx)(l.D0$, {
                        label: p.intl.string(p.t["0n7R2X"]),
                        children: (0, i.jsx)(g.A, { guildId: t, allPeriods: n.payoutsByPeriod }),
                    }),
                ],
            });
}
