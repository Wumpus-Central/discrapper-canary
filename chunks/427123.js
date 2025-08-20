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
    _ = n(594190),
    p = n(594174),
    h = n(580130),
    m = n(55563),
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
function I() {
    let e = !1;
    for (let { id: t, distributor: n } of _.ZP.getRunningGames())
        if (null != t && n !== g.GQo.DISCORD)
            for (let { skuId: n, applicationId: r } of g.Lg6)
                r !== t ||
                    v.includes(n) ||
                    (null == O[n] &&
                        (h.Z.applicationIdsFetched.has(r) ||
                            h.Z.applicationIdsFetching.has(r) ||
                            null != h.Z.getForSku(n) ||
                            c.yD(r),
                        (O[n] = {
                            skuId: n,
                            applicationId: r,
                        }),
                        (e = !0)));
    return e && T(), e;
}
function T() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of a().values(O)) {
        if (v.includes(t)) continue;
        let r = f.Z.getApplication(n);
        if (null == r) {
            f.Z.isFetchingApplication(n) || f.Z.didFetchingApplicationFail(n) || d.ZP.fetchApplication(n);
            continue;
        }
        let i = m.Z.get(t);
        if (null == i) {
            m.Z.isFetching(t) || m.Z.didFetchingSkuFail(t) || u.$N(r.id, t);
            continue;
        }
        h.Z.applicationIdsFetching.has(r.id) ||
        h.Z.isEntitledToSku(p.default.getCurrentUser(), t, r.id, r.id) ||
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
function S(e) {
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
        this.waitFor(_.ZP, m.Z, h.Z), (v = null != (e = s.K.get(b)) ? e : v);
    }
    getDetectedOffPlatformPremiumPerks() {
        return a().values(y);
    }
}
E(C, "displayName", "DetectedOffPlatformPremiumPerksStore");
let N = new C(l.Z, {
    LOGOUT: A,
    SKU_FETCH_SUCCESS: T,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: T,
    ENTITLEMENT_CREATE: T,
    APPLICATION_FETCH_SUCCESS: T,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: S,
    RUNNING_GAMES_CHANGE: I,
});
