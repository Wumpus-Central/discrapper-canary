"use strict";
n.d(t, { Ge: () => f, MP: () => m, Vy: () => I, b2: () => T, c9: () => p, vT: () => g, zz: () => A }), n(321073);
var i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    l = n(539267),
    d = n(17928),
    _ = n(73825),
    u = n(97352),
    c = n(927578),
    E = n(652215),
    h = n(788868);
function m(e) {
    return e.items
        .map((e) => {
            let t = u.A.get(e.planId);
            return s()(null != t, "Unable to fetch plan"), t;
        })
        .map((e) => e.skuId);
}
function f(e, t, n) {
    let i = e.getCurrentSubscriptionPlanIdForGroup(n);
    return (
        (e.type === E.rzx.PREMIUM && null == i) ||
        (s()(null != i, "Current subscription has no plan in group"),
        s()(i !== h.gD.PREMIUM_YEAR_TIER_1 || t !== h.gD.PREMIUM_MONTH_TIER_2, "Unexpected plan switch"),
        n.indexOf(i) < n.indexOf(t))
    );
}
function g(e, t, n) {
    return !f(e, t, n);
}
function p(e, t) {
    let n = u.A.get(e);
    if (null == n) {
        let n = h.hd[e];
        s()(null != n, `Missing hardcoded subscriptionPlan: ${e}`);
        let i = (0, c.mH)(n.skuId);
        u.A.isFetchingForSKU(i) || (0, _.ur)(i, t);
    }
    return n;
}
function A(e, t) {
    let [n, r] = (0, d.yK)([u.A], () => {
        let t = null != e ? u.A.get(e) : null;
        return [t, null != t && u.A.isFetchingForSKU(t.skuId)];
    });
    return (
        i.useEffect(() => {
            if (null != n || null == e || r) return;
            let i = h.hd[e];
            s()(null != i, `Missing hardcoded subscriptionPlan: ${e}`), (0, _.ur)((0, c.mH)(i.skuId), t);
        }, [n, e, t, r]),
        n
    );
}
function I(e) {
    let t = Object.keys(l.V).filter((e) => isNaN(Number(e)));
    if (e.status !== E.Dmq.PAUSED) return { durations: t, currentDaysPaused: 0 };
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
