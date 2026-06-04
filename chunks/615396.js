"use strict";
n.d(t, { Ge: () => E, MP: () => p, Vy: () => I, b2: () => T, c9: () => g, vT: () => m, zz: () => A }), n(321073);
var i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    l = n(539267),
    u = n(17928),
    c = n(73825),
    d = n(97352),
    _ = n(428262),
    h = n(652215),
    f = n(788868);
function p(e) {
    return e.items
        .map((e) => {
            let t = d.A.get(e.planId);
            return s()(null != t, "Unable to fetch plan"), t;
        })
        .map((e) => e.skuId);
}
function E(e, t, n) {
    let i = e.getCurrentSubscriptionPlanIdForGroup(n);
    return (
        (e.type === h.rzx.PREMIUM && null == i) ||
        (s()(null != i, "Current subscription has no plan in group"),
        s()(i !== f.gD.PREMIUM_YEAR_TIER_1 || t !== f.gD.PREMIUM_MONTH_TIER_2, "Unexpected plan switch"),
        n.indexOf(i) < n.indexOf(t))
    );
}
function m(e, t, n) {
    return !E(e, t, n);
}
function g(e, t) {
    let n = d.A.get(e);
    if (null == n) {
        let n = f.hd[e];
        s()(null != n, `Missing hardcoded subscriptionPlan: ${e}`);
        let i = (0, _.mH)(n.skuId);
        d.A.isFetchingForSKU(i) || (0, c.ur)(i, t);
    }
    return n;
}
function A(e, t) {
    let [n, r] = (0, u.yK)([d.A], () => {
        let t = null != e ? d.A.get(e) : null;
        return [t, null != t && d.A.isFetchingForSKU(t.skuId)];
    });
    return (
        i.useEffect(() => {
            if (null != n || null == e || r) return;
            let i = f.hd[e];
            s()(null != i, `Missing hardcoded subscriptionPlan: ${e}`), (0, c.ur)((0, _.mH)(i.skuId), t);
        }, [n, e, t, r]),
        n
    );
}
function I(e) {
    let t = Object.keys(l.V).filter((e) => isNaN(Number(e)));
    if (e.status !== h.Dmq.PAUSED) return { durations: t, currentDaysPaused: 0 };
    if (null == e.pauseEndsAt) return { durations: [], currentDaysPaused: 0 };
    {
        let n = o()(e.currentPeriodStart),
            i = Math.round(o()(e.pauseEndsAt).diff(n, "days", !0)),
            r = [];
        for (let e of t) l.V[e] > i && r.push(e);
        return { durations: r, currentDaysPaused: i };
    }
}
function T(e) {
    return null != e && o().isMoment(e) && e.isSameOrAfter(o()());
}
