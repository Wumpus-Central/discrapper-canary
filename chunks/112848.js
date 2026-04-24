"use strict";
n.d(t, { $F: () => A, Lh: () => h, Wo: () => f, Xb: () => g, bu: () => b, p3: () => E, rG: () => m });
var r,
    i = n(989349),
    a = n.n(i),
    l = n(17928),
    s = n(439174),
    o = n(841595),
    c = n(287809),
    u = n(166403),
    d = n(474090),
    _ = n(416654),
    p = n(788868),
    f = (((r = {}).UPCOMING = "upcoming"), (r.EARNED = "earned"), r);
function h() {
    let e = (0, l.bG)([c.default], () => c.default.getCurrentUser());
    return (0, _.v)(e?.id) ?? null;
}
let m = (e) =>
    (0, l.bG)([o.A], () => {
        if (null == e) return null;
        let t = o.A.getUserProfile(e);
        return t?.premiumSince;
    });
function g() {
    let e = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        t = (0, d.YE)(e, p.PremiumTypes.TIER_2),
        n = (0, l.bG)([u.A], () => {
            let e = u.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null;
        }, [t]),
        r = m(e?.id);
    return n ?? r;
}
let b = () => {
        let e = Object.values(p.VD),
            t = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
            n = (0, l.bG)([u.A], () => u.A.getPremiumTypeSubscription());
        if (!(0, d.YE)(t, p.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
        let r = a()(),
            i = a()(n.premiumSince).add(1, "day"),
            s = r.diff(i, "months");
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: r } = t;
            return s >= r ? n : e;
        }, null);
    },
    A = () => {
        let e,
            t,
            n = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
            r = E(n?.id),
            i =
                ((e = h()),
                (t = (0, l.bG)([u.A], () => u.A.getPremiumTypeSubscription())),
                null == e || null == t || null == t.premiumSince ? null : (0, s.Xr)(e, t.premiumSince)),
            a = g();
        return null != r
            ? { ...r, earnedOnDate: i, status: "earned" }
            : null != a
              ? { ...Object.values(p.VD)[0], status: "upcoming" }
              : null;
    },
    E = (e) => {
        let t = (0, _.v)(e);
        return null == t ? null : p.VD[t];
    };
