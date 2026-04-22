"use strict";
n.d(t, { Ge: () => g, MP: () => p, Vy: () => E, b2: () => I, c9: () => f, vT: () => A, zz: () => x }), n(321073);
var i = n(64700),
    s = n(284009),
    r = n.n(s),
    l = n(989349),
    a = n.n(l),
    o = n(539267),
    c = n(311907),
    d = n(73825),
    u = n(97352),
    _ = n(927578),
    h = n(652215),
    m = n(788868);
function p(e) {
    return e.items
        .map((e) => {
            let t = u.A.get(e.planId);
            return r()(null != t, "Unable to fetch plan"), t;
        })
        .map((e) => e.skuId);
}
function g(e, t, n) {
    let i = e.getCurrentSubscriptionPlanIdForGroup(n);
    return (
        (e.type === h.rzx.PREMIUM && null == i) ||
        (r()(null != i, "Current subscription has no plan in group"),
        r()(i !== m.gD.PREMIUM_YEAR_TIER_1 || t !== m.gD.PREMIUM_MONTH_TIER_2, "Unexpected plan switch"),
        n.indexOf(i) < n.indexOf(t))
    );
}
function A(e, t, n) {
    return !g(e, t, n);
}
function f(e, t) {
    let n = u.A.get(e);
    if (null == n) {
        let n = m.hd[e];
        r()(null != n, `Missing hardcoded subscriptionPlan: ${e}`);
        let i = (0, _.mH)(n.skuId);
        u.A.isFetchingForSKU(i) || (0, d.ur)(i, t);
    }
    return n;
}
function x(e, t) {
    let [n, s] = (0, c.yK)([u.A], () => {
        let t = null != e ? u.A.get(e) : null;
        return [t, null != t && u.A.isFetchingForSKU(t.skuId)];
    });
    return (
        i.useEffect(() => {
            if (null != n || null == e || s) return;
            let i = m.hd[e];
            r()(null != i, `Missing hardcoded subscriptionPlan: ${e}`), (0, d.ur)((0, _.mH)(i.skuId), t);
        }, [n, e, t, s]),
        n
    );
}
function E(e) {
    let t = Object.keys(o.V).filter((e) => isNaN(Number(e)));
    if (e.status !== h.Dmq.PAUSED) return { durations: t, currentDaysPaused: 0 };
    if (null == e.pauseEndsAt) return { durations: [], currentDaysPaused: 0 };
    {
        let n = a()(e.currentPeriodStart),
            i = Math.round(a()(e.pauseEndsAt).diff(n, "days", !0)),
            s = [];
        for (let e of t) o.V[e] > i && s.push(e);
        return { durations: s, currentDaysPaused: i };
    }
}
function I(e) {
    return null != e && a().isMoment(e) && e.isSameOrAfter(a()());
}
