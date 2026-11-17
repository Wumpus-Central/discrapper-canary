var r = n(465323),
    i = n(448645),
    l = n(580630),
    a = n(682901),
    s = n(792996);
n.d(
    t,
    {},
    {
        Cj: function (e, t, n) {
            let r = (0, i.XN)(e, t, n);
            return null == r ? null : s.intl.format(s.t.uVgNlo, { price: (0, l.$g)(r.amount, r.currency) });
        },
        sR: function (e) {
            let { targetSubscriptionPlan: t, isGift: n, shouldShowSavingsPercent: r, isEligibleForTrial: i } = e;
            return r && t.interval === a.WT.YEAR && !n && !i;
        },
        vK: function (e, t, n) {
            let a = (0, i.z_)(e, t, n);
            if (null == a) return null;
            let o = (0, r.LQ)(a.amount, a.currency);
            return null == o || o <= 0
                ? null
                : s.intl.format(s.t["zYz/ME"], { amount: (0, l.$g)(o, a.currency, { maximumFractionDigits: 0 }) });
        },
    },
);
