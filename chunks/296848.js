n.d(t, {
    AT: () => O,
    GY: () => E,
    IV: () => y,
    R4: () => g,
    oE: () => b,
    qH: () => v,
    yb: () => m,
}),
    n(388685),
    n(539854);
var r = n(647438),
    i = n(512722),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    l = n(99945),
    c = n(442837),
    u = n(821849),
    d = n(509545),
    f = n(74538),
    _ = n(981631),
    p = n(474936);
function h(e) {
    return e.items.map((e) => {
        let t = d.Z.get(e.planId);
        return a()(null != t, "Unable to fetch plan"), t;
    });
}
function m(e) {
    return h(e).map((e) => e.skuId);
}
function g(e, t, n) {
    let r = e.getCurrentSubscriptionPlanIdForGroup(n);
    return (
        (e.type === _.NYc.PREMIUM && null == r) ||
        (a()(null != r, "Current subscription has no plan in group"),
        a()(r !== p.Xh.PREMIUM_YEAR_TIER_1 || t !== p.Xh.PREMIUM_MONTH_TIER_2, "Unexpected plan switch"),
        n.indexOf(r) < n.indexOf(t))
    );
}
function E(e, t, n) {
    return !g(e, t, n);
}
function b(e, t) {
    let n = d.Z.get(e);
    if (null == n) {
        let n = p.GP[e];
        a()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
        let r = (0, f.Wz)(n.skuId);
        d.Z.isFetchingForSKU(r) || (0, u.GZ)(r, t);
    }
    return n;
}
function y(e, t) {
    let [n, i] = (0, c.Wu)([d.Z], () => {
        let t = null != e ? d.Z.get(e) : null;
        return [t, null != t && d.Z.isFetchingForSKU(t.skuId)];
    });
    return (
        r.useEffect(() => {
            if (null != n || null == e || i) return;
            let r = p.GP[e];
            a()(null != r, "Missing hardcoded subscriptionPlan: ".concat(e)), (0, u.GZ)((0, f.Wz)(r.skuId), t);
        }, [n, e, t, i]),
        n
    );
}
function O(e) {
    let t = Object.keys(l.T).filter((e) => isNaN(Number(e)));
    if (e.status !== _.O0b.PAUSED)
        return {
            durations: t,
            currentDaysPaused: 0,
        };
    if (null == e.pauseEndsAt)
        return {
            durations: [],
            currentDaysPaused: 0,
        };
    {
        let n = s()(e.currentPeriodStart),
            r = Math.round(s()(e.pauseEndsAt).diff(n, "days", !0)),
            i = [];
        for (let e of t) l.T[e] > r && i.push(e);
        return {
            durations: i,
            currentDaysPaused: r,
        };
    }
}
function v(e) {
    return null != e && s().isMoment(e) && e.isSameOrAfter(s()());
}
