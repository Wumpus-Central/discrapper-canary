"use strict";
n.d(t, { $F: () => g, Lh: () => m, Wo: () => A, Xb: () => T, bu: () => N, p3: () => p, rG: () => I });
var i,
    r = n(989349),
    l = n.n(r),
    s = n(311907),
    a = n(439174),
    o = n(622543),
    c = n(287809),
    u = n(166403),
    d = n(474090),
    _ = n(416654),
    E = n(788868),
    A = (((i = {}).UPCOMING = "upcoming"), (i.EARNED = "earned"), i);
function m() {
    let e = (0, s.bG)([c.default], () => c.default.getCurrentUser());
    return (0, _.v)(e?.id) ?? null;
}
let I = (e) =>
    (0, s.bG)([o.A], () => {
        if (null == e) return null;
        let t = o.A.getUserProfile(e);
        return t?.premiumSince;
    });
function T() {
    let e = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        t = (0, d.YE)(e, E.PremiumTypes.TIER_2),
        n = (0, s.bG)([u.A], () => {
            let e = u.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null;
        }, [t]),
        i = I(e?.id);
    return n ?? i;
}
let N = () => {
        let e = Object.values(E.VD),
            t = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
            n = (0, s.bG)([u.A], () => u.A.getPremiumTypeSubscription());
        if (!(0, d.YE)(t, E.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
        let i = l()(),
            r = l()(n.premiumSince).add(1, "day"),
            a = i.diff(r, "months");
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: i } = t;
            return a >= i ? n : e;
        }, null);
    },
    g = () => {
        let e,
            t,
            n = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
            i = p(n?.id),
            r =
                ((e = m()),
                (t = (0, s.bG)([u.A], () => u.A.getPremiumTypeSubscription())),
                null == e || null == t || null == t.premiumSince ? null : (0, a.Xr)(e, t.premiumSince)),
            l = T();
        return null != i
            ? { ...i, earnedOnDate: r, status: "earned" }
            : null != l
              ? { ...Object.values(E.VD)[0], status: "upcoming" }
              : null;
    },
    p = (e) => {
        let t = (0, _.v)(e);
        return null == t ? null : E.VD[t];
    };
