"use strict";
n.d(t, { A: () => S });
var i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(735438),
    o = n(989349),
    l = n.n(o),
    d = n(17928),
    _ = n(339048),
    u = n(964486),
    c = n(287809),
    E = n(166403),
    h = n(469778),
    m = n(739508),
    f = n(927578),
    g = n(652215),
    p = n(788868);
let A = (e) => {
    let {
            isFetching: t = !1,
            entitlements: n,
            unactivatedFractionalPremiumUnits: i,
            currentUser: r,
            premiumSubscription: a,
            fetchedAllEntitlements: o,
            excludeReverseTrialFromCountdown: d,
        } = e,
        _ = {
            isFractionalPremiumActive: !1,
            fractionalState: p.xc.NONE,
            startsAt: l()(0),
            endsAt: l()(0),
            currentEntitlementId: "",
            currentEntitlementEndsAt: l()(0),
            unactivatedUnits: [],
            fetched: o,
        };
    if (t) return { ..._, fetched: !1 };
    if (null == r || (0 === n.length && 0 === i.length)) return _;
    let u = n
        .filter((e) => null != e.endsAt && null != e.startsAt)
        .sort((e, t) =>
            (s()(null != e.endsAt && null != t.endsAt, "endsAt should not be null"), e.endsAt < t.endsAt)
                ? -1
                : +(e.endsAt > t.endsAt),
        );
    if ((u.reverse(), u.length > 0 && (u.length !== n.length || null == u[0].startsAt || null == u[0].endsAt))) {
        let e = Array.from(n.values()).map((e) => e.id),
            t = "fractional redemption entitlements should have startsAt/endsAt";
        throw ((0, m.hD)(t, { extra: { entitlementIds: e } }), Error(t));
    }
    let c = u[0] ?? null,
        E = p.xc.NONE;
    null != c && (E = null != a && a.status === g.Dmq.PAUSED ? p.xc.FP_SUB_PAUSED : p.xc.FP_ONLY);
    let h = d && c?.sourceType === g.GD.REVERSE_TRIAL;
    return {
        isFractionalPremiumActive: null != c,
        fractionalState: E,
        startsAt: null != c ? l()(c.startsAt) : l()(0),
        endsAt: null != c ? l()((0, f._e)(c.endsAt, i, void 0, h)) : l()(0),
        currentEntitlementId: null != c ? c.id : "",
        currentEntitlementEndsAt: null != c ? l()(c.endsAt) : l()(0),
        unactivatedUnits: i,
        fetched: o,
    };
};
function I(e, t) {
    return null != t && !h.A.fetchingAllEntitlements && (!h.A.fetchedAllEntitlements || e);
}
function T(e) {
    return null != e && !h.A.applicationIdsFetching.has(p.tv) && !h.A.applicationIdsFetched.has(p.tv);
}
function S() {
    let {
            forceFetch: e,
            excludeReverseTrial: t,
            excludeReverseTrialFromCountdown: n,
        } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !1 },
        r = (0, d.bG)([c.default], () => c.default.getCurrentUser()),
        s = (0, d.yK)([h.A], () => h.A.getFractionalPremium({ excludeReverseTrial: t })),
        o = (0, d.bG)([h.A], () => h.A.fetchedAllEntitlements),
        l = (0, d.yK)([h.A], () => h.A.getUnactivatedFractionalPremiumUnits()),
        m = (0, d.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        [f, S] = i.useState(
            A({
                isFetching: I(e, r) || h.A.fetchingAllEntitlements || T(r) || h.A.applicationIdsFetching.has(p.tv),
                entitlements: s,
                unactivatedFractionalPremiumUnits: l,
                currentUser: r,
                premiumSubscription: m,
                fetchedAllEntitlements: o,
                excludeReverseTrialFromCountdown: n,
            }),
        );
    return (
        (0, u.Ay)(() => {
            I(e, r) && (0, _.qw)({ entitlementType: g.zF_.FRACTIONAL_REDEMPTION }), T(r) && (0, _.LM)(p.tv);
        }),
        i.useEffect(() => {
            let e = A({
                entitlements: s,
                unactivatedFractionalPremiumUnits: l,
                currentUser: r,
                premiumSubscription: m,
                fetchedAllEntitlements: o,
                excludeReverseTrialFromCountdown: n,
            });
            S((t) => ((0, a.isEqual)(t, e) ? t : e));
        }, [r, s, m, l, o, n]),
        f
    );
}
