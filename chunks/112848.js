r.d(t, { $F: () => _, Lh: () => g, Wo: () => h, Xb: () => b, bu: () => f, p3: () => R, rG: () => x });
var n,
    a = r(989349),
    l = r.n(a),
    s = r(311907),
    i = r(439174),
    d = r(622543),
    u = r(287809),
    o = r(166403),
    c = r(474090),
    m = r(416654),
    p = r(788868),
    h = (((n = {}).UPCOMING = "upcoming"), (n.EARNED = "earned"), n);
function g() {
    let e = (0, s.bG)([u.default], () => u.default.getCurrentUser());
    return (0, m.v)(e?.id) ?? null;
}
let x = (e) =>
    (0, s.bG)([d.A], () => {
        if (null == e) return null;
        let t = d.A.getUserProfile(e);
        return t?.premiumSince;
    });
function b() {
    let e = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        t = (0, c.YE)(e, p.PremiumTypes.TIER_2),
        r = (0, s.bG)([o.A], () => {
            let e = o.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null;
        }, [t]),
        n = x(e?.id);
    return r ?? n;
}
let f = () => {
        let e = Object.values(p.VD),
            t = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
            r = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription());
        if (!(0, c.YE)(t, p.PremiumTypes.TIER_2) || null == r || null == r.premiumSince) return null;
        let n = l()(),
            a = l()(r.premiumSince).add(1, "day"),
            i = n.diff(a, "months");
        return e.reduce((e, t) => {
            let { id: r, tenureReqNumMonths: n } = t;
            return i >= n ? r : e;
        }, null);
    },
    _ = () => {
        let e,
            t,
            r = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
            n = R(r?.id),
            a =
                ((e = g()),
                (t = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription())),
                null == e || null == t || null == t.premiumSince ? null : (0, i.Xr)(e, t.premiumSince)),
            d = (() => {
                let e = b(),
                    t = Object.values(p.VD);
                if (null == e || null == t) return null;
                let r = l()().diff(e, "days"),
                    n = t[0],
                    a = 30 * n.tenureReqNumMonths - r;
                return a <= 0 ? null : { ...n, daysLeft: a, status: "upcoming" };
            })();
        return null != n ? { ...n, earnedOnDate: a, status: "earned" } : null != d ? d : null;
    },
    R = (e) => {
        let t = (0, m.v)(e);
        return null == t ? null : p.VD[t];
    };
