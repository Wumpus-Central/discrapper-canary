t.d(n, {
    AT: function () {
        return h;
    },
    GY: function () {
        return b;
    },
    R4: function () {
        return m;
    },
    oE: function () {
        return v;
    },
    yb: function () {
        return f;
    }
}),
    t(47120),
    t(653041),
    t(192379);
var i = t(512722),
    r = t.n(i),
    a = t(913527),
    l = t.n(a),
    s = t(99945);
t(442837);
var o = t(821849),
    c = t(509545),
    u = t(74538),
    d = t(981631),
    p = t(474936);
function f(e) {
    return e.items
        .map((e) => {
            let n = c.Z.get(e.planId);
            return r()(null != n, 'Unable to fetch plan'), n;
        })
        .map((e) => e.skuId);
}
function m(e, n, t) {
    let i = e.getCurrentSubscriptionPlanIdForGroup(t);
    return (e.type === d.NYc.PREMIUM && null == i) || (r()(null != i, 'Current subscription has no plan in group'), r()(!(i === p.Xh.PREMIUM_YEAR_TIER_1 && n === p.Xh.PREMIUM_MONTH_TIER_2), 'Unexpected plan switch'), t.indexOf(i) < t.indexOf(n));
}
function b(e, n, t) {
    return !m(e, n, t);
}
function v(e, n) {
    let t = c.Z.get(e);
    if (null == t) {
        let t = p.GP[e];
        r()(null != t, 'Missing hardcoded subscriptionPlan: '.concat(e));
        let i = (0, u.Wz)(t.skuId);
        !c.Z.isFetchingForSKU(i) && (0, o.GZ)(i, n);
    }
    return t;
}
function h(e) {
    let n = Object.keys(s.T).filter((e) => isNaN(Number(e)));
    if (e.status !== d.O0b.PAUSED)
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
        let t = l()(e.currentPeriodStart),
            i = Math.round(l()(e.pauseEndsAt).diff(t, 'days', !0)),
            r = [];
        for (let e of n) s.T[e] > i && r.push(e);
        return {
            durations: r,
            currentDaysPaused: i
        };
    }
}
