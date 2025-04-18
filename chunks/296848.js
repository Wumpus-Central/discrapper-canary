n.d(t, {
    AT: () => E,
    GY: () => m,
    R4: () => h,
    oE: () => g,
    qH: () => b,
    yb: () => p
}),
    n(388685),
    n(539854),
    n(192379);
var r = n(512722),
    i = n.n(r),
    a = n(913527),
    o = n.n(a),
    s = n(99945);
n(442837);
var l = n(821849),
    c = n(509545),
    u = n(74538),
    d = n(981631),
    f = n(474936);
function _(e) {
    return e.items.map((e) => {
        let t = c.Z.get(e.planId);
        return i()(null != t, 'Unable to fetch plan'), t;
    });
}
function p(e) {
    return _(e).map((e) => e.skuId);
}
function h(e, t, n) {
    let r = e.getCurrentSubscriptionPlanIdForGroup(n);
    return (e.type === d.NYc.PREMIUM && null == r) || (i()(null != r, 'Current subscription has no plan in group'), i()(r !== f.Xh.PREMIUM_YEAR_TIER_1 || t !== f.Xh.PREMIUM_MONTH_TIER_2, 'Unexpected plan switch'), n.indexOf(r) < n.indexOf(t));
}
function m(e, t, n) {
    return !h(e, t, n);
}
function g(e, t) {
    let n = c.Z.get(e);
    if (null == n) {
        let n = f.GP[e];
        i()(null != n, 'Missing hardcoded subscriptionPlan: '.concat(e));
        let r = (0, u.Wz)(n.skuId);
        c.Z.isFetchingForSKU(r) || (0, l.GZ)(r, t);
    }
    return n;
}
function E(e) {
    let t = Object.keys(s.T).filter((e) => isNaN(Number(e)));
    if (e.status !== d.O0b.PAUSED)
        return {
            durations: t,
            currentDaysPaused: 0
        };
    if (null == e.pauseEndsAt)
        return {
            durations: [],
            currentDaysPaused: 0
        };
    {
        let n = o()(e.currentPeriodStart),
            r = Math.round(o()(e.pauseEndsAt).diff(n, 'days', !0)),
            i = [];
        for (let e of t) s.T[e] > r && i.push(e);
        return {
            durations: i,
            currentDaysPaused: r
        };
    }
}
function b(e) {
    return null != e && o().isMoment(e) && e.isSameOrAfter(o()());
}
