"use strict";
n.d(t, { Ge: () => E, MP: () => h, Vy: () => I, b2: () => T, c9: () => g, vT: () => m, zz: () => A }), n(321073);
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(989349),
    o = n.n(a),
    l = n(539267),
    u = n(311907),
    c = n(73825),
    d = n(97352),
    _ = n(927578),
    f = n(652215),
    p = n(788868);
function h(e) {
    return e.items
        .map((e) => {
            let t = d.A.get(e.planId);
            return s()(null != t, "Unable to fetch plan"), t;
        })
        .map((e) => e.skuId);
}
function E(e, t, n) {
    let r = e.getCurrentSubscriptionPlanIdForGroup(n);
    return (
        (e.type === f.rzx.PREMIUM && null == r) ||
        (s()(null != r, "Current subscription has no plan in group"),
        s()(r !== p.gD.PREMIUM_YEAR_TIER_1 || t !== p.gD.PREMIUM_MONTH_TIER_2, "Unexpected plan switch"),
        n.indexOf(r) < n.indexOf(t))
    );
}
function m(e, t, n) {
    return !E(e, t, n);
}
function g(e, t) {
    let n = d.A.get(e);
    if (null == n) {
        let n = p.hd[e];
        s()(null != n, `Missing hardcoded subscriptionPlan: ${e}`);
        let r = (0, _.mH)(n.skuId);
        d.A.isFetchingForSKU(r) || (0, c.ur)(r, t);
    }
    return n;
}
function A(e, t) {
    let [n, i] = (0, u.yK)([d.A], () => {
        let t = null != e ? d.A.get(e) : null;
        return [t, null != t && d.A.isFetchingForSKU(t.skuId)];
    });
    return (
        r.useEffect(() => {
            if (null != n || null == e || i) return;
            let r = p.hd[e];
            s()(null != r, `Missing hardcoded subscriptionPlan: ${e}`), (0, c.ur)((0, _.mH)(r.skuId), t);
        }, [n, e, t, i]),
        n
    );
}
function I(e) {
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
function T(e) {
    return null != e && o().isMoment(e) && e.isSameOrAfter(o()());
}
