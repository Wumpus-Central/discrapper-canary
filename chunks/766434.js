n.d(t, {
    Br: function () {
        return l;
    },
    Uj: function () {
        return s;
    },
    j0: function () {
        return r;
    }
}),
    n(47120);
var i = n(198139);
let r = (e) => {
    var t, n;
    let i = Object.values(null !== (n = null == e ? void 0 : e.ppgs) && void 0 !== n ? n : {})[0],
        r = null == i ? void 0 : i.status,
        l = null == i ? void 0 : null === (t = i.payout) || void 0 === t ? void 0 : t.status,
        s = null == i ? void 0 : i.deferral_reasons;
    return {
        ppgStatus: r,
        payoutStatus: l,
        ppgDeferralReasons: s,
        periodEndDate: null == i ? void 0 : i.period_ending_at
    };
};
function l(e) {
    let t, n;
    let { ppgStatus: l } = r(e[0]);
    return (
        l === i.x_.OPEN ? ([t, ...n] = e) : (n = e),
        {
            currentPeriod: t,
            previousPeriods: n
        }
    );
}
function s(e, t) {
    let n, i, r, l;
    return (
        null != e && ((n = e.amount), (r = e.paymentsCount), null != t && ((i = e.amount / t.amount - 1), (l = e.paymentsCount - t.paymentsCount))),
        {
            revenue: n,
            revenuePctChange: i,
            paymentsCount: r,
            paymentsCountChange: l
        }
    );
}
