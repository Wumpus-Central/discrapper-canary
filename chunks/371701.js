n.d(t, {
    A: () => O,
});
var r = n(627968),
    i = n(417597),
    l = n(397927),
    s = n(209812),
    a = n(242564),
    c = n(906779),
    o = n(586621),
    d = n(522663),
    u = n(857802),
    f = n(595303),
    g = n(781289),
    b = n(555337),
    m = n(250627),
    p = n(839837),
    x = n(89791),
    h = n(985018);

function j(e) {
    let { listingId: t } = e,
        n = (0, m.az)(t);
    return null == n
        ? null
        : (0, r.jsx)(a.fh, {
              children: n.name,
          });
}

function O(e) {
    var t, n, a;
    let { guildId: m } = e,
        O = (0, p.A)(m),
        y = (0, s.GK)(),
        v = (0, i.bG)([b.A], () => b.A.getGuild());
    return O.loading || null == v
        ? (0, r.jsx)(l.y$y, {})
        : null == O.application
          ? (0, r.jsx)(u.A, {
                guild: v,
            })
          : (0, r.jsxs)(d.A, {
                children: [
                    (0, r.jsx)(o.A, {
                        revenue: O.metrics.revenue,
                        revenueTrend: O.metrics.revenuePctChange,
                        summaryMetricLabel: h.intl.string(h.t.R3PCmW),
                        summaryMetricValue: null != (t = O.metrics.paymentsCount) ? t : "-",
                        summaryMetricTrend: null != (n = O.metrics.paymentsCountChange) ? n : 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, r.jsx)(x.A, {
                            guildId: m,
                            earningsData: O,
                        }),
                    }),
                    (0, r.jsx)(l.D0$, {
                        label: h.intl.string(h.t["+5Rmhl"]),
                        children: (0, r.jsx)(c.A, {
                            ListingIdLabel: j,
                            payoutsByPeriod: O.payoutsByPeriod,
                            team: null == (a = O.application) ? void 0 : a.team,
                        }),
                    }),
                    (0, r.jsx)(l.D0$, {
                        label: h.intl.string(h.t.O8cDAJ),
                        disabled: y,
                        children: (0, r.jsx)(f.A, {
                            guildId: m,
                            application: O.application,
                        }),
                    }),
                    (0, r.jsx)(l.D0$, {
                        label: h.intl.string(h.t["0n7R2X"]),
                        children: (0, r.jsx)(g.A, {
                            guildId: m,
                            allPeriods: O.payoutsByPeriod,
                        }),
                    }),
                ],
            });
}
