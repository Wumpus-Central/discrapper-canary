"use strict";
n.d(t, { A: () => T });
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(735438),
    o = n(989349),
    l = n.n(o),
    u = n(311907),
    c = n(339048),
    d = n(964486),
    _ = n(287809),
    f = n(166403),
    p = n(469778),
    h = n(739508),
    m = n(927578),
    E = n(652215),
    g = n(788868);
let A = (e) => {
    let {
            isFetching: t = !1,
            entitlements: n,
            unactivatedFractionalPremiumUnits: r,
            currentUser: i,
            premiumSubscription: a,
            fetchedAllEntitlements: o,
            excludeReverseTrialFromCountdown: u,
        } = e,
        c = {
            isFractionalPremiumActive: !1,
            fractionalState: g.xc.NONE,
            startsAt: l()(0),
            endsAt: l()(0),
            currentEntitlementId: "",
            currentEntitlementEndsAt: l()(0),
            unactivatedUnits: [],
            fetched: o,
        };
    if (t) return { ...c, fetched: !1 };
    if (null == i || (0 === n.length && 0 === r.length)) return c;
    let d = n
        .filter((e) => null != e.endsAt && null != e.startsAt)
        .sort((e, t) =>
            (s()(null != e.endsAt && null != t.endsAt, "endsAt should not be null"), e.endsAt < t.endsAt)
                ? -1
                : +(e.endsAt > t.endsAt),
        );
    if ((d.reverse(), d.length > 0 && (d.length !== n.length || null == d[0].startsAt || null == d[0].endsAt))) {
        let e = Array.from(n.values()).map((e) => e.id),
            t = "fractional redemption entitlements should have startsAt/endsAt";
        throw ((0, h.hD)(t, { extra: { entitlementIds: e } }), Error(t));
    }
    let _ = d[0] ?? null,
        f = g.xc.NONE;
    null != _ && (f = null != a && a.status === E.Dmq.PAUSED ? g.xc.FP_SUB_PAUSED : g.xc.FP_ONLY);
    let p = u && _?.sourceType === E.GD.REVERSE_TRIAL;
    return {
        isFractionalPremiumActive: null != _,
        fractionalState: f,
        startsAt: null != _ ? l()(_.startsAt) : l()(0),
        endsAt: null != _ ? l()((0, m._e)(_.endsAt, r, void 0, p)) : l()(0),
        currentEntitlementId: null != _ ? _.id : "",
        currentEntitlementEndsAt: null != _ ? l()(_.endsAt) : l()(0),
        unactivatedUnits: r,
        fetched: o,
    };
};
function I(e, t) {
    return null != t && !p.A.fetchingAllEntitlements && (!p.A.fetchedAllEntitlements || e);
}
function T() {
    let {
            forceFetch: e,
            excludeReverseTrial: t,
            excludeReverseTrialFromCountdown: n,
        } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !1 },
        i = (0, u.bG)([_.default], () => _.default.getCurrentUser()),
        s = (0, u.yK)([p.A], () => p.A.getFractionalPremium({ excludeReverseTrial: t })),
        o = (0, u.bG)([p.A], () => p.A.fetchedAllEntitlements),
        l = (0, u.yK)([p.A], () => p.A.getUnactivatedFractionalPremiumUnits()),
        h = (0, u.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        [m, g] = r.useState(
            A({
                isFetching: I(e, i) || p.A.fetchingAllEntitlements,
                entitlements: s,
                unactivatedFractionalPremiumUnits: l,
                currentUser: i,
                premiumSubscription: h,
                fetchedAllEntitlements: o,
                excludeReverseTrialFromCountdown: n,
            }),
        );
    return (
        (0, d.Ay)(() => {
            I(e, i) && (0, c.qw)({ entitlementType: E.zF_.FRACTIONAL_REDEMPTION });
        }),
        r.useEffect(() => {
            let e = A({
                entitlements: s,
                unactivatedFractionalPremiumUnits: l,
                currentUser: i,
                premiumSubscription: h,
                fetchedAllEntitlements: o,
                excludeReverseTrialFromCountdown: n,
            });
            g((t) => ((0, a.isEqual)(t, e) ? t : e));
        }, [i, s, h, l, o, n]),
        m
    );
}
