n.d(t, { Z: () => N }), n(388685), n(539854);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(496929),
    u = n(16084),
    d = n(728345),
    f = n(812206),
    p = n(594190),
    _ = n(594174),
    m = n(580130),
    h = n(55563),
    g = n(981631);
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
    v = [];
function S() {
    let e = !1;
    for (let { id: t, distributor: n } of p.ZP.getRunningGames())
        if (null != t && n !== g.GQo.DISCORD)
            for (let { skuId: n, applicationId: r } of g.Lg6)
                r !== t ||
                    v.includes(n) ||
                    (null == O[n] &&
                        (m.Z.applicationIdsFetched.has(r) ||
                            m.Z.applicationIdsFetching.has(r) ||
                            null != m.Z.getForSku(n) ||
                            c.yD(r),
                        (O[n] = {
                            skuId: n,
                            applicationId: r,
                        }),
                        (e = !0)));
    return e && I(), e;
}
function I() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of a().values(O)) {
        if (v.includes(t)) continue;
        let r = f.Z.getApplication(n);
        if (null == r) {
            f.Z.isFetchingApplication(n) || f.Z.didFetchingApplicationFail(n) || d.ZP.fetchApplication(n);
            continue;
        }
        let i = h.Z.get(t);
        if (null == i) {
            h.Z.isFetching(t) || h.Z.didFetchingSkuFail(t) || u.$N(r.id, t);
            continue;
        }
        m.Z.applicationIdsFetching.has(r.id) ||
        m.Z.isEntitledToSku(_.default.getCurrentUser(), t, r.id, r.id) ||
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
function T(e) {
    let { skuId: t } = e;
    if ((delete y[t], v.includes(t))) return !1;
    v.push(t), s.K.set(b, v);
}
function A() {
    (y = {}), (O = {});
}
class C extends (r = o.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(f.Z, m.Z, p.ZP, h.Z, _.default), (v = null != (e = s.K.get(b)) ? e : v);
    }
    getDetectedOffPlatformPremiumPerks() {
        return a().values(y);
    }
}
E(C, "displayName", "DetectedOffPlatformPremiumPerksStore");
let N = new C(l.Z, {
    LOGOUT: A,
    SKU_FETCH_SUCCESS: I,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: I,
    ENTITLEMENT_CREATE: I,
    APPLICATION_FETCH_SUCCESS: I,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: T,
    RUNNING_GAMES_CHANGE: S,
});
