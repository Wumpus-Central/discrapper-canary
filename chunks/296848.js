n.d(t, {
    AT: () => E,
    GY: () => m,
    R4: () => h,
    oE: () => g,
    yb: () => p
}),
    n(47120),
    n(653041),
    n(192379);
var i = n(512722),
    r = n.n(i),
    a = n(913527),
    s = n.n(a),
    o = n(99945);
n(442837);
var l = n(821849),
    u = n(509545),
    c = n(74538),
    d = n(981631),
    f = n(474936);
function _(e) {
    return e.items.map((e) => {
        let t = u.Z.get(e.planId);
        return r()(null != t, 'Unable to fetch plan'), t;
    });
}
function p(e) {
    return _(e).map((e) => e.skuId);
}
function h(e, t, n) {
    let i = e.getCurrentSubscriptionPlanIdForGroup(n);
    return (e.type === d.NYc.PREMIUM && null == i) || (r()(null != i, 'Current subscription has no plan in group'), r()(!(i === f.Xh.PREMIUM_YEAR_TIER_1 && t === f.Xh.PREMIUM_MONTH_TIER_2), 'Unexpected plan switch'), n.indexOf(i) < n.indexOf(t));
}
function m(e, t, n) {
    return !h(e, t, n);
}
function g(e, t) {
    let n = u.Z.get(e);
    if (null == n) {
        let n = f.GP[e];
        r()(null != n, 'Missing hardcoded subscriptionPlan: '.concat(e));
        let i = (0, c.Wz)(n.skuId);
        u.Z.isFetchingForSKU(i) || (0, l.GZ)(i, t);
    }
    return n;
}
function E(e) {
    let t = Object.keys(o.T).filter((e) => isNaN(Number(e)));
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
        let n = s()(e.currentPeriodStart),
            i = Math.round(s()(e.pauseEndsAt).diff(n, 'days', !0)),
            r = [];
        for (let e of t) o.T[e] > i && r.push(e);
        return {
            durations: r,
            currentDaysPaused: i
        };
    }
}
