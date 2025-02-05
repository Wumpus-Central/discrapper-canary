n.d(t, { Z: () => b }), n(47120), n(653041);
var i,
    l,
    a,
    r = n(392711),
    s = n.n(r),
    o = n(442837),
    c = n(433517),
    d = n(570140),
    u = n(496929),
    m = n(16084),
    _ = n(728345),
    h = n(812206),
    p = n(594190),
    g = n(594174),
    f = n(580130),
    x = n(55563),
    C = n(981631);
let v = 'DetectedOffPlatformPremiumPerksStore',
    E = {},
    I = {},
    N = [];
function S() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of s().values(I)) {
        if (N.includes(t)) continue;
        let i = h.Z.getApplication(n);
        if (null == i) {
            h.Z.isFetchingApplication(n) || h.Z.didFetchingApplicationFail(n) || _.ZP.fetchApplication(n);
            continue;
        }
        let l = x.Z.get(t);
        if (null == l) {
            x.Z.isFetching(t) || x.Z.didFetchingSkuFail(t) || m.$N(i.id, t);
            continue;
        }
        f.Z.applicationIdsFetching.has(i.id) || f.Z.isEntitledToSku(g.default.getCurrentUser(), t, i.id, i.id) || !l.available
            ? null != E[t] && (delete E[t], (e = !0))
            : ((E[t] = {
                  skuId: t,
                  applicationId: n
              }),
              (e = !0));
    }
    return e;
}
class T extends (i = o.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(p.ZP, x.Z, f.Z), (N = null !== (e = c.K.get(v)) && void 0 !== e ? e : N);
    }
    getDetectedOffPlatformPremiumPerks() {
        return s().values(E);
    }
}
(a = 'DetectedOffPlatformPremiumPerksStore'),
    (l = 'displayName') in T
        ? Object.defineProperty(T, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (T[l] = a);
let b = new T(d.Z, {
    LOGOUT: function () {
        (E = {}), (I = {});
    },
    SKU_FETCH_SUCCESS: S,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: S,
    ENTITLEMENT_CREATE: S,
    APPLICATION_FETCH_SUCCESS: S,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete E[t], N.includes(t))) return !1;
        N.push(t), c.K.set(v, N);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of p.ZP.getRunningGames())
            if (null != t && n !== C.GQo.DISCORD)
                for (let { skuId: n, applicationId: i } of C.Lg6)
                    !(i !== t || N.includes(n)) &&
                        null == I[n] &&
                        (f.Z.applicationIdsFetched.has(i) || f.Z.applicationIdsFetching.has(i) || null != f.Z.getForSku(n) || u.yD(i),
                        (I[n] = {
                            skuId: n,
                            applicationId: i
                        }),
                        (e = !0));
        return e && S(), e;
    }
});
