n.d(t, { A: () => j });
var i = n(627968),
    l = n(417597),
    s = n(289873),
    r = n(452027),
    a = n(209812),
    o = n(242564),
    d = n(906779),
    c = n(586621),
    u = n(522663),
    m = n(857802),
    g = n(595303),
    h = n(781289),
    x = n(555337),
    _ = n(250627),
    p = n(839837),
    A = n(89791),
    E = n(985018);
function f(e) {
    let { listingId: t } = e,
        n = (0, _.az)(t);
    return null == n ? null : (0, i.jsx)(o.fh, { children: n.name });
}
function j(e) {
    let { guildId: t } = e,
        n = (0, p.A)(t),
        o = (0, a.GK)(),
        _ = (0, l.bG)([x.A], () => x.A.getGuild());
    return n.loading || null == _
        ? (0, i.jsx)(s.y, {})
        : null == n.application
          ? (0, i.jsx)(m.A, { guild: _ })
          : (0, i.jsxs)(u.A, {
                children: [
                    (0, i.jsx)(c.A, {
                        revenue: n.metrics.revenue,
                        revenueTrend: n.metrics.revenuePctChange,
                        summaryMetricLabel: E.intl.string(E.t.R3PCmW),
                        summaryMetricValue: n.metrics.paymentsCount ?? "-",
                        summaryMetricTrend: n.metrics.paymentsCountChange ?? 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, i.jsx)(A.A, { guildId: t, earningsData: n }),
                    }),
                    (0, i.jsx)(r.D, {
                        label: E.intl.string(E.t["+5Rmhl"]),
                        children: (0, i.jsx)(d.A, {
                            ListingIdLabel: f,
                            payoutsByPeriod: n.payoutsByPeriod,
                            team: n.application?.team,
                        }),
                    }),
                    (0, i.jsx)(r.D, {
                        label: E.intl.string(E.t.O8cDAJ),
                        disabled: o,
                        children: (0, i.jsx)(g.A, { guildId: t, application: n.application }),
                    }),
                    (0, i.jsx)(r.D, {
                        label: E.intl.string(E.t["0n7R2X"]),
                        children: (0, i.jsx)(h.A, { guildId: t, allPeriods: n.payoutsByPeriod }),
                    }),
                ],
            });
}
