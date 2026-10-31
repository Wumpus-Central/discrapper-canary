n.d(t, { A: () => C });
var i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(435558),
    l = n(536637),
    o = n.n(l),
    d = n(447732),
    c = n(931093),
    u = n(17928),
    _ = n(339048),
    E = n(964486),
    A = n(287809),
    h = n(166403),
    f = n(469778),
    I = n(739508),
    p = n(24482),
    T = n(652215),
    m = n(202541);
function g(e) {
    let {
            isFetching: t = !1,
            entitlements: n,
            unactivatedFractionalPremiumUnits: i,
            currentUser: r,
            premiumSubscription: s,
            fetchedAllEntitlements: l,
            excludeReverseTrialFromCountdown: c,
        } = e,
        u = {
            isFractionalPremiumActive: !1,
            fractionalState: m.xc.NONE,
            startsAt: o()(0),
            endsAt: o()(0),
            currentEntitlementId: "",
            currentEntitlementEndsAt: o()(0),
            unactivatedUnits: [],
            fetched: l,
        };
    if (t) return { ...u, fetched: !1 };
    if (null == r || (0 === n.length && 0 === i.length)) return u;
    let _ = n
        .filter((e) => null != e.endsAt && null != e.startsAt)
        .sort((e, t) =>
            (a()(null != e.endsAt && null != t.endsAt, "endsAt should not be null"), e.endsAt < t.endsAt)
                ? -1
                : +(e.endsAt > t.endsAt),
        );
    if ((_.reverse(), _.length > 0 && (_.length !== n.length || null == _[0].startsAt || null == _[0].endsAt))) {
        let e = Array.from(n.values()).map((e) => e.id),
            t = "fractional redemption entitlements should have startsAt/endsAt";
        throw ((0, I.hD)(t, { extra: { entitlementIds: e } }), Error(t));
    }
    let E = _[0] ?? null,
        A = m.xc.NONE;
    null != E && (A = null != s && s.status === T.Dmq.PAUSED ? m.xc.FP_SUB_PAUSED : m.xc.FP_ONLY);
    let h = c && E?.sourceType === d.G.REVERSE_TRIAL;
    return {
        isFractionalPremiumActive: null != E,
        fractionalState: A,
        startsAt: null != E ? o()(E.startsAt) : o()(0),
        endsAt: null != E ? o()((0, p._e)(E.endsAt, i, void 0, h)) : o()(0),
        currentEntitlementId: null != E ? E.id : "",
        currentEntitlementEndsAt: null != E ? o()(E.endsAt) : o()(0),
        unactivatedUnits: i,
        fetched: l,
    };
}
function S(e, t) {
    return null != t && !f.A.fetchingAllEntitlements && (!f.A.fetchedAllEntitlements || e);
}
function N(e) {
    return null != e && !f.A.applicationIdsFetching.has(m.tv) && !f.A.applicationIdsFetched.has(m.tv);
}
function C() {
    let {
            forceFetch: e,
            excludeReverseTrial: t,
            excludeReverseTrialFromCountdown: n,
        } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !1 },
        r = (0, u.bG)([A.default], () => A.default.getCurrentUser()),
        a = (0, u.yK)([f.A], () => f.A.getFractionalPremium({ excludeReverseTrial: t })),
        l = (0, u.bG)([f.A], () => f.A.fetchedAllEntitlements),
        o = (0, u.yK)([f.A], () => f.A.getUnactivatedFractionalPremiumUnits()),
        d = (0, u.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        [I, p] = i.useState(
            g({
                isFetching: S(e, r) || f.A.fetchingAllEntitlements || N(r) || f.A.applicationIdsFetching.has(m.tv),
                entitlements: a,
                unactivatedFractionalPremiumUnits: o,
                currentUser: r,
                premiumSubscription: d,
                fetchedAllEntitlements: l,
                excludeReverseTrialFromCountdown: n,
            }),
        );
    return (
        (0, E.Ay)(() => {
            (S(e, r) && (0, _.qw)({ entitlementType: c.z.FRACTIONAL_REDEMPTION }), N(r) && (0, _.LM)(m.tv));
        }),
        i.useEffect(() => {
            let e = g({
                entitlements: a,
                unactivatedFractionalPremiumUnits: o,
                currentUser: r,
                premiumSubscription: d,
                fetchedAllEntitlements: l,
                excludeReverseTrialFromCountdown: n,
            });
            p((t) => ((0, s.isEqual)(t, e) ? t : e));
        }, [r, a, d, o, l, n]),
        I
    );
}
