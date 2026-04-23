n.d(t, { El: () => s, Rs: () => i, dc: () => l });
let i = (e) => {
    let t = Object.values(e?.ppgs ?? {})[0],
        n = t?.status,
        i = t?.payout?.status;
    return {
        ppgStatus: n,
        payoutStatus: i,
        ppgDeferralReasons: t?.deferral_reasons,
        periodEndDate: t?.period_ending_at,
    };
};
function l(e) {
    let t,
        n,
        i = new Date(),
        l = new Date(Date.UTC(i.getUTCFullYear(), i.getUTCMonth(), 1)).toISOString(),
        s = e.findIndex((e) => e.periodStartingAt === l);
    return -1 !== s ? ((t = e[s]), (n = e.slice(s + 1))) : (n = e), { currentPeriod: t, previousPeriods: n };
}
function s(e, t) {
    let n, i, l, s;
    return (
        null != e &&
            ((n = e.amount),
            (l = e.paymentsCount),
            null != t && (t.amount > 0 && (i = e.amount / t.amount - 1), (s = e.paymentsCount - t.paymentsCount))),
        { revenue: n, revenuePctChange: i, paymentsCount: l, paymentsCountChange: s }
    );
}
