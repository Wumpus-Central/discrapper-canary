n.d(t, { Z: () => C }), n(47120), n(653041);
var r,
    i,
    a,
    o = n(392711),
    l = n.n(o),
    s = n(442837),
    c = n(433517),
    d = n(570140),
    u = n(496929),
    p = n(16084),
    m = n(728345),
    f = n(812206),
    h = n(594190),
    g = n(594174),
    _ = n(580130),
    b = n(55563),
    v = n(981631);
let y = 'DetectedOffPlatformPremiumPerksStore',
    x = {},
    O = {},
    E = [];
function j() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of l().values(O)) {
        if (E.includes(t)) continue;
        let r = f.Z.getApplication(n);
        if (null == r) {
            f.Z.isFetchingApplication(n) || f.Z.didFetchingApplicationFail(n) || m.ZP.fetchApplication(n);
            continue;
        }
        let i = b.Z.get(t);
        if (null == i) {
            b.Z.isFetching(t) || b.Z.didFetchingSkuFail(t) || p.$N(r.id, t);
            continue;
        }
        _.Z.applicationIdsFetching.has(r.id) || _.Z.isEntitledToSku(g.default.getCurrentUser(), t, r.id, r.id) || !i.available
            ? null != x[t] && (delete x[t], (e = !0))
            : ((x[t] = {
                  skuId: t,
                  applicationId: n
              }),
              (e = !0));
    }
    return e;
}
class N extends (r = s.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(h.ZP, b.Z, _.Z), (E = null !== (e = c.K.get(y)) && void 0 !== e ? e : E);
    }
    getDetectedOffPlatformPremiumPerks() {
        return l().values(x);
    }
}
(a = 'DetectedOffPlatformPremiumPerksStore'),
    (i = 'displayName') in N
        ? Object.defineProperty(N, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[i] = a);
let C = new N(d.Z, {
    LOGOUT: function () {
        (x = {}), (O = {});
    },
    SKU_FETCH_SUCCESS: j,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: j,
    ENTITLEMENT_CREATE: j,
    APPLICATION_FETCH_SUCCESS: j,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete x[t], E.includes(t))) return !1;
        E.push(t), c.K.set(y, E);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of h.ZP.getRunningGames())
            if (null != t && n !== v.GQo.DISCORD)
                for (let { skuId: n, applicationId: r } of v.Lg6)
                    !(r !== t || E.includes(n)) &&
                        null == O[n] &&
                        (_.Z.applicationIdsFetched.has(r) || _.Z.applicationIdsFetching.has(r) || null != _.Z.getForSku(n) || u.yD(r),
                        (O[n] = {
                            skuId: n,
                            applicationId: r
                        }),
                        (e = !0));
        return e && j(), e;
    }
});
