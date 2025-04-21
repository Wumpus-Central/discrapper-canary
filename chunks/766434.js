n.d(t, {
    Br: () => l,
    Uj: () => s,
    j0: () => i
}),
    n(388685);
var r = n(198139);
let i = (e) => {
    var t, n;
    let r = Object.values(null != (n = null == e ? void 0 : e.ppgs) ? n : {})[0],
        i = null == r ? void 0 : r.status,
        l = null == r || null == (t = r.payout) ? void 0 : t.status;
    return {
        ppgStatus: i,
        payoutStatus: l,
        ppgDeferralReasons: null == r ? void 0 : r.deferral_reasons,
        periodEndDate: null == r ? void 0 : r.period_ending_at
    };
};
function l(e) {
    let t,
        n,
        { ppgStatus: l } = i(e[0]);
    return (
        l === r.x_.OPEN ? ([t, ...n] = e) : (n = e),
        {
            currentPeriod: t,
            previousPeriods: n
        }
    );
}
function s(e, t) {
    let n, r, i, l;
    return (
        null != e && ((n = e.amount), (i = e.paymentsCount), null != t && ((r = e.amount / t.amount - 1), (l = e.paymentsCount - t.paymentsCount))),
        {
            revenue: n,
            revenuePctChange: r,
            paymentsCount: i,
            paymentsCountChange: l
        }
    );
}
