n.d(t, {
    Br: () => i,
    Uj: () => l,
    j0: () => r,
});
let r = (e) => {
    var t, n;
    let r = Object.values(null != (n = null == e ? void 0 : e.ppgs) ? n : {})[0],
        i = null == r ? void 0 : r.status,
        l = null == r || null == (t = r.payout) ? void 0 : t.status;
    return {
        ppgStatus: i,
        payoutStatus: l,
        ppgDeferralReasons: null == r ? void 0 : r.deferral_reasons,
        periodEndDate: null == r ? void 0 : r.period_ending_at,
    };
};
function i(e) {
    let t,
        n,
        r = new Date(),
        i = new Date(Date.UTC(r.getUTCFullYear(), r.getUTCMonth(), 1)).toISOString(),
        l = e.findIndex((e) => e.periodStartingAt === i);
    return (
        -1 !== l ? ((t = e[l]), (n = e.slice(l + 1))) : (n = e),
        {
            currentPeriod: t,
            previousPeriods: n,
        }
    );
}
function l(e, t) {
    let n, r, i, l;
    return (
        null != e &&
            ((n = e.amount),
            (i = e.paymentsCount),
            null != t && (t.amount > 0 && (r = e.amount / t.amount - 1), (l = e.paymentsCount - t.paymentsCount))),
        {
            revenue: n,
            revenuePctChange: r,
            paymentsCount: i,
            paymentsCountChange: l,
        }
    );
}
