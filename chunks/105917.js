"use strict";
n.d(t, { El: () => l, Rs: () => i, dc: () => s });
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
function s(e) {
    let t,
        n,
        i = new Date(),
        s = new Date(Date.UTC(i.getUTCFullYear(), i.getUTCMonth(), 1)).toISOString(),
        l = e.findIndex((e) => e.periodStartingAt === s);
    return -1 !== l ? ((t = e[l]), (n = e.slice(l + 1))) : (n = e), { currentPeriod: t, previousPeriods: n };
}
function l(e, t) {
    let n, i, s, l;
    return (
        null != e &&
            ((n = e.amount),
            (s = e.paymentsCount),
            null != t && (t.amount > 0 && (i = e.amount / t.amount - 1), (l = e.paymentsCount - t.paymentsCount))),
        { revenue: n, revenuePctChange: i, paymentsCount: s, paymentsCountChange: l }
    );
}
