n.d(t, { A: () => N }), n(896048), n(321073);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(506774),
    l = n(73153),
    c = n(339048),
    u = n(830382),
    d = n(627363),
    f = n(587895),
    p = n(15285),
    _ = n(287809),
    h = n(469778),
    m = n(67480),
    g = n(652215);
function E(e, t, n) {
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
let b = "DetectedOffPlatformPremiumPerksStore",
    y = {},
    O = {},
    A = [];
function v() {
    let e = !1;
    for (let { id: t, distributor: n } of p.Ay.getRunningGames())
        if (null != t && n !== g.d3x.DISCORD)
            for (let { skuId: n, applicationId: r } of g.m_i)
                r !== t ||
                    A.includes(n) ||
                    (null == O[n] &&
                        (h.A.applicationIdsFetched.has(r) ||
                            h.A.applicationIdsFetching.has(r) ||
                            null != h.A.getForSku(n) ||
                            c.LM(r),
                        (O[n] = {
                            skuId: n,
                            applicationId: r,
                        }),
                        (e = !0)));
    return e && S(), e;
}
function S() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of a().values(O)) {
        if (A.includes(t)) continue;
        let r = f.A.getApplication(n);
        if (null == r) {
            f.A.isFetchingApplication(n) || f.A.didFetchingApplicationFail(n) || d.Ay.fetchApplication(n);
            continue;
        }
        let i = m.A.get(t);
        if (null == i) {
            m.A.isFetching(t) || m.A.didFetchingSkuFail(t) || u.EX(r.id, t);
            continue;
        }
        h.A.applicationIdsFetching.has(r.id) ||
        h.A.isEntitledToSku(_.default.getCurrentUser(), t, r.id, r.id) ||
        !i.available
            ? null != y[t] && (delete y[t], (e = !0))
            : ((y[t] = {
                  skuId: t,
                  applicationId: n,
              }),
              (e = !0));
    }
    return e;
}
function I(e) {
    let { skuId: t } = e;
    if ((delete y[t], A.includes(t))) return !1;
    A.push(t), o.w.set(b, A);
}
function T() {
    (y = {}), (O = {});
}
class C extends (r = s.Ay.Store) {
    initialize() {
        var e;
        this.waitFor(f.A, h.A, p.Ay, m.A, _.default), (A = null != (e = o.w.get(b)) ? e : A);
    }
    getDetectedOffPlatformPremiumPerks() {
        return a().values(y);
    }
}
E(C, "displayName", "DetectedOffPlatformPremiumPerksStore");
let N = new C(l.h, {
    LOGOUT: T,
    SKU_FETCH_SUCCESS: S,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: S,
    ENTITLEMENT_CREATE: S,
    APPLICATION_FETCH_SUCCESS: S,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: I,
    RUNNING_GAMES_CHANGE: v,
});
