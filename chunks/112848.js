n.d(t, { $F: () => E, Lh: () => h, Wo: () => R, Xb: () => x, bu: () => A, p3: () => f, rG: () => p });
var r,
    a = n(989349),
    s = n.n(a),
    l = n(311907),
    i = n(439174),
    d = n(622543),
    u = n(287809),
    o = n(166403),
    c = n(474090),
    m = n(416654),
    _ = n(788868),
    R = (((r = {}).UPCOMING = "upcoming"), (r.EARNED = "earned"), r);
function h() {
    let e = (0, l.bG)([u.default], () => u.default.getCurrentUser());
    return (0, m.v)(e?.id) ?? null;
}
let p = (e) =>
    (0, l.bG)([d.A], () => {
        if (null == e) return null;
        let t = d.A.getUserProfile(e);
        return t?.premiumSince;
    });
function x() {
    let e = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        t = (0, c.YE)(e, _.PremiumTypes.TIER_2),
        n = (0, l.bG)([o.A], () => {
            let e = o.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null;
        }, [t]),
        r = p(e?.id);
    return n ?? r;
}
let A = () => {
        let e = Object.values(_.VD),
            t = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
            n = (0, l.bG)([o.A], () => o.A.getPremiumTypeSubscription());
        if (!(0, c.YE)(t, _.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
        let r = s()(),
            a = s()(n.premiumSince).add(1, "day"),
            i = r.diff(a, "months");
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: r } = t;
            return i >= r ? n : e;
        }, null);
    },
    E = () => {
        let e,
            t,
            n = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
            r = f(n?.id),
            a =
                ((e = h()),
                (t = (0, l.bG)([o.A], () => o.A.getPremiumTypeSubscription())),
                null == e || null == t || null == t.premiumSince ? null : (0, i.Xr)(e, t.premiumSince)),
            s = x();
        return null != r
            ? { ...r, earnedOnDate: a, status: "earned" }
            : null != s
              ? { ...Object.values(_.VD)[0], status: "upcoming" }
              : null;
    },
    f = (e) => {
        let t = (0, m.v)(e);
        return null == t ? null : _.VD[t];
    };
