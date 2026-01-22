n.d(t, { A: () => I }), n(638769), n(264879), n(896048), n(65821);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(735438),
    o = n(989349),
    l = n.n(o),
    c = n(311907),
    u = n(339048),
    d = n(964486),
    f = n(287809),
    p = n(166403),
    _ = n(469778),
    h = n(739508),
    m = n(927578),
    g = n(652215),
    E = n(788868);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = (e) => {
    var t;
    let {
            isFetching: n = !1,
            entitlements: r,
            unactivatedFractionalPremiumUnits: i,
            currentUser: s,
            premiumSubscription: o,
            fetchedAllEntitlements: c,
            excludeReverseTrialFromCountdown: u,
        } = e,
        d = {
            isFractionalPremiumActive: !1,
            fractionalState: E.xc.NONE,
            startsAt: l()(0),
            endsAt: l()(0),
            currentEntitlementId: "",
            unactivatedUnits: [],
            fetched: c,
        };
    if (n) return A(y({}, d), { fetched: !1 });
    if (null == s || (0 === r.length && 0 === i.length)) return d;
    let f = r
        .filter((e) => null != e.endsAt && null != e.startsAt)
        .sort((e, t) =>
            (a()(null != e.endsAt && null != t.endsAt, "endsAt should not be null"), e.endsAt < t.endsAt)
                ? -1
                : +(e.endsAt > t.endsAt),
        );
    if ((f.reverse(), f.length > 0 && (f.length !== r.length || null == f[0].startsAt || null == f[0].endsAt))) {
        let e = Array.from(r.values()).map((e) => e.id),
            t = "fractional redemption entitlements should have startsAt/endsAt";
        throw ((0, h.hD)(t, { extra: { entitlementIds: e } }), Error(t));
    }
    let p = null != (t = f[0]) ? t : null,
        _ = E.xc.NONE;
    null != p && (_ = null != o && o.status === g.Dmq.PAUSED ? E.xc.FP_SUB_PAUSED : E.xc.FP_ONLY);
    let b = u && (null == p ? void 0 : p.sourceType) === g.GD.REVERSE_TRIAL;
    return {
        isFractionalPremiumActive: null != p,
        fractionalState: _,
        startsAt: null != p ? l()(p.startsAt) : l()(0),
        endsAt: null != p ? l()((0, m._e)(p.endsAt, i, void 0, b)) : l()(0),
        currentEntitlementId: null != p ? p.id : "",
        unactivatedUnits: i,
        fetched: c,
    };
};
function S(e, t) {
    return null != t && !_.A.fetchingAllEntitlements && (!_.A.fetchedAllEntitlements || e);
}
function I() {
    let {
            forceFetch: e,
            excludeReverseTrial: t,
            excludeReverseTrialFromCountdown: n,
        } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                  forceFetch: !1,
                  excludeReverseTrial: !1,
                  excludeReverseTrialFromCountdown: !1,
              },
        i = (0, c.bG)([f.default], () => f.default.getCurrentUser()),
        a = (0, c.yK)([_.A], () => _.A.getFractionalPremium({ excludeReverseTrial: t })),
        o = (0, c.bG)([_.A], () => _.A.fetchedAllEntitlements),
        l = (0, c.yK)([_.A], () => _.A.getUnactivatedFractionalPremiumUnits()),
        h = (0, c.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        [m, E] = r.useState(
            v({
                isFetching: S(e, i) || _.A.fetchingAllEntitlements,
                entitlements: a,
                unactivatedFractionalPremiumUnits: l,
                currentUser: i,
                premiumSubscription: h,
                fetchedAllEntitlements: o,
                excludeReverseTrialFromCountdown: n,
            }),
        );
    return (
        (0, d.Ay)(() => {
            S(e, i) && (0, u.qw)({ entitlementType: g.zF_.FRACTIONAL_REDEMPTION });
        }),
        r.useEffect(() => {
            let e = v({
                entitlements: a,
                unactivatedFractionalPremiumUnits: l,
                currentUser: i,
                premiumSubscription: h,
                fetchedAllEntitlements: o,
                excludeReverseTrialFromCountdown: n,
            });
            E((t) => ((0, s.isEqual)(t, e) ? t : e));
        }, [i, a, h, l, o, n]),
        m
    );
}
