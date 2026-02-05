"use strict";
n.d(t, { $F: () => I, Lh: () => p, Wo: () => f, Xb: () => m, bu: () => g, p3: () => T, rG: () => h });
var r = n(989349),
    i = n.n(r),
    a = n(311907),
    s = n(439174),
    o = n(622543),
    l = n(287809),
    u = n(166403),
    c = n(474090),
    d = n(416654),
    _ = n(788868),
    f = (function (e) {
        return (e.UPCOMING = "upcoming"), (e.EARNED = "earned"), e;
    })({});
function p() {
    let e = (0, a.bG)([l.default], () => l.default.getCurrentUser());
    return (0, d.v)(e?.id) ?? null;
}
let h = (e) =>
    (0, a.bG)([o.A], () => {
        if (null == e) return null;
        let t = o.A.getUserProfile(e);
        return t?.premiumSince;
    });
function m() {
    let e = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
        t = (0, c.YE)(e, _.PremiumTypes.TIER_2),
        n = (0, a.bG)([u.A], () => {
            let e = u.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null;
        }, [t]),
        r = h(e?.id);
    return n ?? r;
}
let g = () => {
        let e = Object.values(_.VD),
            t = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
            n = (0, a.bG)([u.A], () => u.A.getPremiumTypeSubscription());
        if (!(0, c.YE)(t, _.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
        let r = i()(),
            s = i()(n.premiumSince).add(1, "day"),
            o = r.diff(s, "months");
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: r } = t;
            return o >= r ? n : e;
        }, null);
    },
    E = () => {
        let e = p(),
            t = (0, a.bG)([u.A], () => u.A.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, s.Xr)(e, t.premiumSince);
    },
    A = () => {
        let e = m(),
            t = Object.values(_.VD);
        if (null == e || null == t) return null;
        let n = i()().diff(e, "days"),
            r = t[0],
            a = 30 * r.tenureReqNumMonths - n;
        return a <= 0 ? null : { ...r, daysLeft: a, status: "upcoming" };
    },
    I = () => {
        let e = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
            t = T(e?.id),
            n = E(),
            r = A();
        return null != t ? { ...t, earnedOnDate: n, status: "earned" } : null != r ? r : null;
    },
    T = (e) => {
        let t = (0, d.v)(e);
        return null == t ? null : _.VD[t];
    };
