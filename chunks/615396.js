"use strict";
n.d(t, { Ge: () => m, MP: () => E, Vy: () => T, b2: () => S, c9: () => A, vT: () => g, zz: () => I }), n(321073);
var i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    l = n(539267),
    u = n(17928),
    c = n(73825),
    d = n(930767),
    _ = n(97352),
    h = n(428262),
    f = n(652215),
    p = n(788868);
function E(e) {
    return e.items
        .map((e) => {
            let t = _.A.get(e.planId);
            return s()(null != t, "Unable to fetch plan"), t;
        })
        .map((e) => e.skuId);
}
function m(e, t, n) {
    let i = e.getCurrentSubscriptionPlanIdForGroup(n);
    if (e.type === f.rzx.PREMIUM && null == i) return !0;
    let r = { oldPlanId: i, newPlanId: t };
    if (null == i) throw new d.v({ message: "Current subscription has no plan in group", extraSentryInformation: r });
    if (i === p.gD.PREMIUM_YEAR_TIER_1 && t === p.gD.PREMIUM_MONTH_TIER_2)
        throw new d.v({ message: "Unexpected plan switch", extraSentryInformation: r });
    return n.indexOf(i) < n.indexOf(t);
}
function g(e, t, n) {
    return !m(e, t, n);
}
function A(e, t) {
    let n = _.A.get(e);
    if (null == n) {
        let n = p.hd[e];
        s()(null != n, `Missing hardcoded subscriptionPlan: ${e}`);
        let i = (0, h.mH)(n.skuId);
        _.A.isFetchingForSKU(i) || (0, c.ur)(i, t);
    }
    return n;
}
function I(e, t) {
    let [n, r] = (0, u.yK)([_.A], () => {
        let t = null != e ? _.A.get(e) : null;
        return [t, null != t && _.A.isFetchingForSKU(t.skuId)];
    });
    return (
        i.useEffect(() => {
            if (null != n || null == e || r) return;
            let i = p.hd[e];
            s()(null != i, `Missing hardcoded subscriptionPlan: ${e}`), (0, c.ur)((0, h.mH)(i.skuId), t);
        }, [n, e, t, r]),
        n
    );
}
function T(e) {
    let t = Object.keys(l.V).filter((e) => isNaN(Number(e)));
    if (e.status !== f.Dmq.PAUSED) return { durations: t, currentDaysPaused: 0 };
    if (null == e.pauseEndsAt) return { durations: [], currentDaysPaused: 0 };
    {
        let n = o()(e.currentPeriodStart),
            i = Math.round(o()(e.pauseEndsAt).diff(n, "days", !0)),
            r = [];
        for (let e of t) l.V[e] > i && r.push(e);
        return { durations: r, currentDaysPaused: i };
    }
}
function S(e) {
    return null != e && o().isMoment(e) && e.isSameOrAfter(o()());
}
