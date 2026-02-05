"use strict";
n.d(t, { Ge: () => g, MP: () => m, Vy: () => T, b2: () => y, c9: () => A, vT: () => E, zz: () => I }), n(321073);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    l = n(539267),
    u = n(311907),
    c = n(73825),
    d = n(97352),
    _ = n(927578),
    f = n(652215),
    p = n(788868);
function h(e) {
    return e.items.map((e) => {
        let t = d.A.get(e.planId);
        return a()(null != t, "Unable to fetch plan"), t;
    });
}
function m(e) {
    return h(e).map((e) => e.skuId);
}
function g(e, t, n) {
    let r = e.getCurrentSubscriptionPlanIdForGroup(n);
    return (
        (e.type === f.rzx.PREMIUM && null == r) ||
        (a()(null != r, "Current subscription has no plan in group"),
        a()(r !== p.gD.PREMIUM_YEAR_TIER_1 || t !== p.gD.PREMIUM_MONTH_TIER_2, "Unexpected plan switch"),
        n.indexOf(r) < n.indexOf(t))
    );
}
function E(e, t, n) {
    return !g(e, t, n);
}
function A(e, t) {
    let n = d.A.get(e);
    if (null == n) {
        let n = p.hd[e];
        a()(null != n, `Missing hardcoded subscriptionPlan: ${e}`);
        let r = (0, _.mH)(n.skuId);
        d.A.isFetchingForSKU(r) || (0, c.ur)(r, t);
    }
    return n;
}
function I(e, t) {
    let [n, i] = (0, u.yK)([d.A], () => {
        let t = null != e ? d.A.get(e) : null;
        return [t, null != t && d.A.isFetchingForSKU(t.skuId)];
    });
    return (
        r.useEffect(() => {
            if (null != n || null == e || i) return;
            let r = p.hd[e];
            a()(null != r, `Missing hardcoded subscriptionPlan: ${e}`), (0, c.ur)((0, _.mH)(r.skuId), t);
        }, [n, e, t, i]),
        n
    );
}
function T(e) {
    let t = Object.keys(l.V).filter((e) => isNaN(Number(e)));
    if (e.status !== f.Dmq.PAUSED) return { durations: t, currentDaysPaused: 0 };
    if (null == e.pauseEndsAt) return { durations: [], currentDaysPaused: 0 };
    {
        let n = o()(e.currentPeriodStart),
            r = Math.round(o()(e.pauseEndsAt).diff(n, "days", !0)),
            i = [];
        for (let e of t) l.V[e] > r && i.push(e);
        return { durations: i, currentDaysPaused: r };
    }
}
function y(e) {
    return null != e && o().isMoment(e) && e.isSameOrAfter(o()());
}
