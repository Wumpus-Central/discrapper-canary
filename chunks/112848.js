n.d(t, { $F: () => O, Lh: () => T, Wo: () => u, Xb: () => N, bu: () => R, p3: () => P, rG: () => d });
var i,
    l = n(989349),
    r = n.n(l),
    s = n(17928),
    a = n(439174),
    E = n(841595),
    o = n(287809),
    _ = n(166403),
    c = n(474090),
    A = n(416654),
    I = n(788868),
    u = (((i = {}).UPCOMING = "upcoming"), (i.EARNED = "earned"), i);
function T() {
    let e = (0, s.bG)([o.default], () => o.default.getCurrentUser());
    return (0, A.v)(e?.id) ?? null;
}
let d = (e) =>
    (0, s.bG)([E.A], () => {
        if (null == e) return null;
        let t = E.A.getUserProfile(e);
        return t?.premiumSince;
    });
function N() {
    let e = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
        t = (0, c.YE)(e, I.PremiumTypes.TIER_2),
        n = (0, s.bG)([_.A], () => {
            let e = _.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null;
        }, [t]),
        i = d(e?.id);
    return n ?? i;
}
let R = () => {
        let e = Object.values(I.VD),
            t = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
            n = (0, s.bG)([_.A], () => _.A.getPremiumTypeSubscription());
        if (!(0, c.YE)(t, I.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
        let i = r()(),
            l = r()(n.premiumSince).add(1, "day"),
            a = i.diff(l, "months");
        return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: i } = t;
            return a >= i ? n : e;
        }, null);
    },
    O = () => {
        let e,
            t,
            n = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
            i = P(n?.id),
            l =
                ((e = T()),
                (t = (0, s.bG)([_.A], () => _.A.getPremiumTypeSubscription())),
                null == e || null == t || null == t.premiumSince ? null : (0, a.Xr)(e, t.premiumSince)),
            r = N();
        return null != i
            ? { ...i, earnedOnDate: l, status: "earned" }
            : null != r
              ? { ...Object.values(I.VD)[0], status: "upcoming" }
              : null;
    },
    P = (e) => {
        let t = (0, A.v)(e);
        return null == t ? null : I.VD[t];
    };
