u.d(t, { Ge: () => P, MP: () => M, Vy: () => b, b2: () => E, c9: () => A, vT: () => g, zz: () => I }), u(321073);
var e = u(64700),
    r = u(284009),
    s = u.n(r),
    l = u(989349),
    i = u.n(l),
    a = u(539267),
    d = u(17928),
    c = u(73825),
    o = u(97352),
    p = u(927578),
    f = u(652215),
    h = u(788868);
function M(n) {
    return n.items
        .map((n) => {
            let t = o.A.get(n.planId);
            return s()(null != t, "Unable to fetch plan"), t;
        })
        .map((n) => n.skuId);
}
function P(n, t, u) {
    let e = n.getCurrentSubscriptionPlanIdForGroup(u);
    return (
        (n.type === f.rzx.PREMIUM && null == e) ||
        (s()(null != e, "Current subscription has no plan in group"),
        s()(e !== h.gD.PREMIUM_YEAR_TIER_1 || t !== h.gD.PREMIUM_MONTH_TIER_2, "Unexpected plan switch"),
        u.indexOf(e) < u.indexOf(t))
    );
}
function g(n, t, u) {
    return !P(n, t, u);
}
function A(n, t) {
    let u = o.A.get(n);
    if (null == u) {
        let u = h.hd[n];
        s()(null != u, `Missing hardcoded subscriptionPlan: ${n}`);
        let e = (0, p.mH)(u.skuId);
        o.A.isFetchingForSKU(e) || (0, c.ur)(e, t);
    }
    return u;
}
function I(n, t) {
    let [u, r] = (0, d.yK)([o.A], () => {
        let t = null != n ? o.A.get(n) : null;
        return [t, null != t && o.A.isFetchingForSKU(t.skuId)];
    });
    return (
        e.useEffect(() => {
            if (null != u || null == n || r) return;
            let e = h.hd[n];
            s()(null != e, `Missing hardcoded subscriptionPlan: ${n}`), (0, c.ur)((0, p.mH)(e.skuId), t);
        }, [u, n, t, r]),
        u
    );
}
function b(n) {
    let t = Object.keys(a.V).filter((n) => isNaN(Number(n)));
    if (n.status !== f.Dmq.PAUSED) return { durations: t, currentDaysPaused: 0 };
    if (null == n.pauseEndsAt) return { durations: [], currentDaysPaused: 0 };
    {
        let u = i()(n.currentPeriodStart),
            e = Math.round(i()(n.pauseEndsAt).diff(u, "days", !0)),
            r = [];
        for (let n of t) a.V[n] > e && r.push(n);
        return { durations: r, currentDaysPaused: e };
    }
}
function E(n) {
    return null != n && i().isMoment(n) && n.isSameOrAfter(i()());
}
