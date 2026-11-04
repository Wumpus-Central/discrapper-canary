n(321073);
var i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(536637),
    l = n.n(s),
    o = n(539267),
    d = n(855986),
    c = n(73825),
    u = n(930767),
    _ = n(97352),
    E = n(879610),
    A = n(652215),
    h = n(682901);
function f(e, t, n) {
    let i = e.getCurrentSubscriptionPlanIdForGroup(n);
    if (e.type === A.rzx.PREMIUM && null == i) return !0;
    let r = { oldPlanId: i, newPlanId: t };
    if (null == i) throw new u.v({ message: "Current subscription has no plan in group", extraSentryInformation: r });
    if (i === h.gD.PREMIUM_YEAR_TIER_1 && t === h.gD.PREMIUM_MONTH_TIER_2)
        throw new u.v({ message: "Unexpected plan switch", extraSentryInformation: r });
    return n.indexOf(i) < n.indexOf(t);
}
n.d(
    t,
    {},
    {
        Ge: f,
        MP: function (e) {
            return e.items
                .map((e) => {
                    let t = _.A.get(e.planId);
                    return (a()(null != t, "Unable to fetch plan"), t);
                })
                .map((e) => e.skuId);
        },
        Vy: function (e) {
            let t = Object.keys(o.V).filter((e) => isNaN(Number(e)));
            if (e.status !== A.Dmq.PAUSED) return { durations: t, currentDaysPaused: 0 };
            if (null == e.pauseEndsAt) return { durations: [], currentDaysPaused: 0 };
            {
                let n = l()(e.currentPeriodStart),
                    i = Math.round(l()(e.pauseEndsAt).diff(n, "days", !0)),
                    r = [];
                for (let e of t) o.V[e] > i && r.push(e);
                return { durations: r, currentDaysPaused: i };
            }
        },
        b2: function (e) {
            return null != e && l().isMoment(e) && e.isSameOrAfter(l()());
        },
        c9: function (e, t) {
            let n = _.A.get(e);
            if (null == n) {
                let n = h.hd[e];
                a()(null != n, `Missing hardcoded subscriptionPlan: ${e}`);
                let i = (0, E.mH)(n.skuId);
                _.A.isFetchingForSKU(i) || (0, c.ur)(i, t);
            }
            return n;
        },
        vT: function (e, t, n) {
            return !f(e, t, n);
        },
        zz: function (e, t) {
            let [n, r] = (0, d.yK)([_.A], () => {
                let t = null != e ? _.A.get(e) : null;
                return [t, null != t && _.A.isFetchingForSKU(t.skuId)];
            });
            return (
                i.useEffect(() => {
                    if (null != n || null == e || r) return;
                    let i = h.hd[e];
                    (a()(null != i, `Missing hardcoded subscriptionPlan: ${e}`), (0, c.ur)((0, E.mH)(i.skuId), t));
                }, [n, e, t, r]),
                n
            );
        },
    },
);
