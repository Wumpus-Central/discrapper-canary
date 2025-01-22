r.d(n, {
    AT: function () {
        return b;
    },
    GY: function () {
        return v;
    },
    R4: function () {
        return E;
    },
    oE: function () {
        return y;
    },
    yb: function () {
        return g;
    }
});
var i = r(47120);
var a = r(653041);
r(192379);
var o = r(512722),
    s = r.n(o),
    l = r(913527),
    u = r.n(l),
    c = r(99945);
r(442837);
var d = r(821849),
    f = r(509545),
    p = r(74538),
    h = r(981631),
    _ = r(474936);
function m(e) {
    return e.items.map((e) => {
        let n = f.Z.get(e.planId);
        return s()(null != n, 'Unable to fetch plan'), n;
    });
}
function g(e) {
    return m(e).map((e) => e.skuId);
}
function E(e, n, r) {
    let i = e.getCurrentSubscriptionPlanIdForGroup(r);
    return (e.type === h.NYc.PREMIUM && null == i) || (s()(null != i, 'Current subscription has no plan in group'), s()(!(i === _.Xh.PREMIUM_YEAR_TIER_1 && n === _.Xh.PREMIUM_MONTH_TIER_2), 'Unexpected plan switch'), r.indexOf(i) < r.indexOf(n));
}
function v(e, n, r) {
    return !E(e, n, r);
}
function y(e, n) {
    let r = f.Z.get(e);
    if (null == r) {
        let r = _.GP[e];
        s()(null != r, 'Missing hardcoded subscriptionPlan: '.concat(e));
        let i = (0, p.Wz)(r.skuId);
        !f.Z.isFetchingForSKU(i) && (0, d.GZ)(i, n);
    }
    return r;
}
function b(e) {
    let n = Object.keys(c.T).filter((e) => isNaN(Number(e)));
    if (e.status !== h.O0b.PAUSED)
        return {
            durations: n,
            currentDaysPaused: 0
        };
    if (null == e.pauseEndsAt)
        return {
            durations: [],
            currentDaysPaused: 0
        };
    {
        let r = u()(e.currentPeriodStart),
            i = Math.round(u()(e.pauseEndsAt).diff(r, 'days', !0)),
            a = [];
        for (let e of n) c.T[e] > i && a.push(e);
        return {
            durations: a,
            currentDaysPaused: i
        };
    }
}
