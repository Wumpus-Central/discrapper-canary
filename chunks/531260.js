"use strict";
n.d(t, { A: () => S });
var i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(435558),
    l = n(989349),
    o = n.n(l),
    d = n(17928),
    c = n(339048),
    u = n(964486),
    _ = n(287809),
    E = n(166403),
    A = n(469778),
    h = n(739508),
    I = n(158045),
    f = n(652215),
    p = n(202541);
function T(e) {
    let {
            isFetching: t = !1,
            entitlements: n,
            unactivatedFractionalPremiumUnits: i,
            currentUser: r,
            premiumSubscription: s,
            fetchedAllEntitlements: l,
            excludeReverseTrialFromCountdown: d,
        } = e,
        c = {
            isFractionalPremiumActive: !1,
            fractionalState: p.xc.NONE,
            startsAt: o()(0),
            endsAt: o()(0),
            currentEntitlementId: "",
            currentEntitlementEndsAt: o()(0),
            unactivatedUnits: [],
            fetched: l,
        };
    if (t) return { ...c, fetched: !1 };
    if (null == r || (0 === n.length && 0 === i.length)) return c;
    let u = n
        .filter((e) => null != e.endsAt && null != e.startsAt)
        .sort((e, t) =>
            (a()(null != e.endsAt && null != t.endsAt, "endsAt should not be null"), e.endsAt < t.endsAt)
                ? -1
                : +(e.endsAt > t.endsAt),
        );
    if ((u.reverse(), u.length > 0 && (u.length !== n.length || null == u[0].startsAt || null == u[0].endsAt))) {
        let e = Array.from(n.values()).map((e) => e.id),
            t = "fractional redemption entitlements should have startsAt/endsAt";
        throw ((0, h.hD)(t, { extra: { entitlementIds: e } }), Error(t));
    }
    let _ = u[0] ?? null,
        E = p.xc.NONE;
    null != _ && (E = null != s && s.status === f.Dmq.PAUSED ? p.xc.FP_SUB_PAUSED : p.xc.FP_ONLY);
    let A = d && _?.sourceType === f.GD.REVERSE_TRIAL;
    return {
        isFractionalPremiumActive: null != _,
        fractionalState: E,
        startsAt: null != _ ? o()(_.startsAt) : o()(0),
        endsAt: null != _ ? o()((0, I._e)(_.endsAt, i, void 0, A)) : o()(0),
        currentEntitlementId: null != _ ? _.id : "",
        currentEntitlementEndsAt: null != _ ? o()(_.endsAt) : o()(0),
        unactivatedUnits: i,
        fetched: l,
    };
}
function m(e, t) {
    return null != t && !A.A.fetchingAllEntitlements && (!A.A.fetchedAllEntitlements || e);
}
function g(e) {
    return null != e && !A.A.applicationIdsFetching.has(p.tv) && !A.A.applicationIdsFetched.has(p.tv);
}
function S() {
    let {
            forceFetch: e,
            excludeReverseTrial: t,
            excludeReverseTrialFromCountdown: n,
        } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !1 },
        r = (0, d.bG)([_.default], () => _.default.getCurrentUser()),
        a = (0, d.yK)([A.A], () => A.A.getFractionalPremium({ excludeReverseTrial: t })),
        l = (0, d.bG)([A.A], () => A.A.fetchedAllEntitlements),
        o = (0, d.yK)([A.A], () => A.A.getUnactivatedFractionalPremiumUnits()),
        h = (0, d.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        [I, S] = i.useState(
            T({
                isFetching: m(e, r) || A.A.fetchingAllEntitlements || g(r) || A.A.applicationIdsFetching.has(p.tv),
                entitlements: a,
                unactivatedFractionalPremiumUnits: o,
                currentUser: r,
                premiumSubscription: h,
                fetchedAllEntitlements: l,
                excludeReverseTrialFromCountdown: n,
            }),
        );
    return (
        (0, u.Ay)(() => {
            m(e, r) && (0, c.qw)({ entitlementType: f.zF_.FRACTIONAL_REDEMPTION }), g(r) && (0, c.LM)(p.tv);
        }),
        i.useEffect(() => {
            let e = T({
                entitlements: a,
                unactivatedFractionalPremiumUnits: o,
                currentUser: r,
                premiumSubscription: h,
                fetchedAllEntitlements: l,
                excludeReverseTrialFromCountdown: n,
            });
            S((t) => ((0, s.isEqual)(t, e) ? t : e));
        }, [r, a, h, o, l, n]),
        I
    );
}
